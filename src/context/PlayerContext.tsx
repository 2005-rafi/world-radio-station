import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { RadioStation } from '../types';

interface PlayerContextType {
  currentStation: RadioStation | null;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  playStation: (station: RadioStation) => void;
  pause: () => void;
  resume: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  stop: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;
    
    const audio = audioRef.current;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
      console.error('Audio playback error');
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [volume]);

  const playStation = (station: RadioStation) => {
    if (audioRef.current) {
      audioRef.current.src = station.url_resolved || station.url;
      audioRef.current.play().catch(console.error);
      setCurrentStation(station);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const resume = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      setCurrentStation(null);
    }
  };

  return (
    <PlayerContext.Provider value={{
      currentStation,
      isPlaying,
      volume,
      isMuted,
      playStation,
      pause,
      resume,
      setVolume,
      toggleMute,
      stop,
    }}>
      {children}
    </PlayerContext.Provider>
  );
};