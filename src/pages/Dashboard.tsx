import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Clock, TrendingUp, Radio, Users, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRadioStations } from '../hooks/useRadioStations';
import StationCard from '../components/ui/StationCard';
import { RadioStation } from '../types';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { stations } = useRadioStations();
  const [recentStations, setRecentStations] = useState<RadioStation[]>([]);
  const [favoriteStations, setFavoriteStations] = useState<RadioStation[]>([]);
  const [recommendedStations, setRecommendedStations] = useState<RadioStation[]>([]);

  useEffect(() => {
    if (stations.length > 0) {
      // Simulate user's recent listening history
      setRecentStations(stations.slice(0, 3));
      
      // Simulate user's favorites
      setFavoriteStations(stations.slice(5, 8));
      
      // Simulate recommendations based on listening history
      setRecommendedStations(stations.slice(10, 16));
    }
  }, [stations]);

  const stats = [
    { label: 'Hours Listened', value: '24.5', icon: Clock, color: 'text-blue-600' },
    { label: 'Stations Played', value: '18', icon: Radio, color: 'text-green-600' },
    { label: 'Favorites', value: '12', icon: Heart, color: 'text-red-600' },
    { label: 'Countries', value: '8', icon: Globe, color: 'text-purple-600' },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Please sign in</h2>
          <p className="text-gray-600">You need to be logged in to view your dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's been happening with your radio listening.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gray-50 mb-4 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Recently Played */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-gray-500" />
                    Recently Played
                  </h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentStations.map((station) => (
                    <StationCard key={station.stationuuid} station={station} />
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Recommended for You */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-gray-500" />
                    Recommended for You
                  </h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedStations.map((station) => (
                    <StationCard key={station.stationuuid} station={station} />
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  <Play className="h-4 w-4 mr-2" />
                  Discover New Stations
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="h-4 w-4 mr-2" />
                  View Favorites
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Users className="h-4 w-4 mr-2" />
                  Create Playlist
                </button>
              </div>
            </motion.div>

            {/* Your Favorites */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Your Favorites
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {favoriteStations.map((station) => (
                  <div key={station.stationuuid} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0">
                      {station.favicon ? (
                        <img
                          src={station.favicon}
                          alt={station.name}
                          className="w-10 h-10 rounded-lg object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/40/3B82F6/white?text=${station.name.charAt(0)}`;
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {station.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {station.name}
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        {station.country}
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activity Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4">
                This Week's Activity
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Listening Time</span>
                  <span className="font-semibold">8.5 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">New Discoveries</span>
                  <span className="font-semibold">5 stations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Favorite Genre</span>
                  <span className="font-semibold">Pop</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;