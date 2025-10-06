import React from 'react';
import { Play, Heart, Globe, Users } from 'lucide-react';
import { RadioStation } from '../../types';
import { usePlayer } from '../../context/PlayerContext';
import { motion } from 'framer-motion';

interface StationCardProps {
  station: RadioStation;
  className?: string;
  showPlayButton?: boolean;
}

const StationCard: React.FC<StationCardProps> = ({ 
  station, 
  className = '', 
  showPlayButton = true 
}) => {
  const { playStation, currentStation, isPlaying } = usePlayer();
  const isCurrentStation = currentStation?.stationuuid === station.stationuuid;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group ${className}`}
    >
      <div className="p-4">
        {/* Station Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              {station.favicon ? (
                <img
                  src={station.favicon}
                  alt={station.name}
                  className="w-12 h-12 rounded-lg object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/48/3B82F6/white?text=${station.name.charAt(0)}`;
                  }}
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {station.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 truncate text-lg">
                {station.name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <Globe className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">
                  {station.country}
                </span>
                {station.language && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {station.language}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        {/* Station Info */}
        <div className="space-y-2 mb-4">
          {station.tags && (
            <div className="flex flex-wrap gap-2">
              {station.tags.split(',').slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{station.votes} votes</span>
              </div>
              {station.bitrate > 0 && (
                <span>{station.bitrate}kbps</span>
              )}
              {station.codec && (
                <span className="uppercase">{station.codec}</span>
              )}
            </div>
          </div>
        </div>

        {/* Play Button */}
        {showPlayButton && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playStation(station)}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
              isCurrentStation && isPlaying
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            <Play className="h-4 w-4" />
            <span>
              {isCurrentStation && isPlaying ? 'Now Playing' : 'Play Station'}
            </span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default StationCard;