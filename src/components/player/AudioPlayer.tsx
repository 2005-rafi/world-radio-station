import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, SkipForward, SkipBack } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer: React.FC = () => {
  const { currentStation, isPlaying, volume, isMuted, pause, resume, setVolume, toggleMute } = usePlayer();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  if (!currentStation) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Station Info */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="flex-shrink-0">
                {currentStation.favicon ? (
                  <img
                    src={currentStation.favicon}
                    alt={currentStation.name}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/48/3B82F6/white?text=${currentStation.name.charAt(0)}`;
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {currentStation.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-900 truncate">
                  {currentStation.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {currentStation.country} • {currentStation.language}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <SkipBack className="h-5 w-5" />
              </button>
              
              <button
                onClick={isPlaying ? pause : resume}
                className="p-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </button>

              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <SkipForward className="h-5 w-5" />
              </button>

              {/* Volume Control */}
              <div className="relative">
                <button
                  onClick={toggleMute}
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>

                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3"
                      onMouseEnter={() => setShowVolumeSlider(true)}
                      onMouseLeave={() => setShowVolumeSlider(false)}
                    >
                      <div className="w-24">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={(e) => setVolume(parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="text-xs text-gray-500 text-center mt-1">
                          {Math.round(volume * 100)}%
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AudioPlayer;