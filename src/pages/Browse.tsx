import React, { useState, useEffect } from 'react';
import { Search, Filter, Globe, Music, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import StationCard from '../components/ui/StationCard';
import { useRadioStations, useCountries } from '../hooks/useRadioStations';
import { RadioStation } from '../types';

const Browse: React.FC = () => {
  const { stations, loading, fetchStations, fetchStationsByCountry, fetchStationsByGenre } = useRadioStations();
  const { countries } = useCountries();
  const [filteredStations, setFilteredStations] = useState<RadioStation[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const genres = [
    'pop', 'rock', 'jazz', 'classical', 'electronic', 'country', 'hip hop', 'reggae',
    'blues', 'folk', 'metal', 'punk', 'alternative', 'indie', 'dance', 'ambient'
  ];

  useEffect(() => {
    let filtered = [...stations];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(station =>
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.tags.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredStations(filtered);
  }, [stations, searchQuery]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedGenre('');
    if (country) {
      fetchStationsByCountry(country);
    } else {
      fetchStations({ limit: 50 });
    }
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setSelectedCountry('');
    if (genre) {
      fetchStationsByGenre(genre);
    } else {
      fetchStations({ limit: 50 });
    }
  };

  const clearFilters = () => {
    setSelectedCountry('');
    setSelectedGenre('');
    setSearchQuery('');
    fetchStations({ limit: 50 });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Radio Stations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover thousands of radio stations from around the world. 
              Filter by country, genre, or search for specific stations.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search stations, countries, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
              />
            </div>

            {/* Filter Toggle */}
            <div className="text-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Filter className="h-5 w-5 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                {/* Country Filter */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Globe className="h-4 w-4 mr-2" />
                    Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Countries</option>
                    {countries.slice(0, 20).map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name} ({country.stationcount})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Genre Filter */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Music className="h-4 w-4 mr-2" />
                    Genre
                  </label>
                  <select
                    value={selectedGenre}
                    onChange={(e) => handleGenreChange(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre.charAt(0).toUpperCase() + genre.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Radio className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">
              {loading ? 'Loading...' : `${filteredStations.length} stations found`}
            </span>
          </div>
          
          {(selectedCountry || selectedGenre) && (
            <div className="flex items-center space-x-2">
              {selectedCountry && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedCountry}
                </span>
              )}
              {selectedGenre && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {selectedGenre}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Station Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredStations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station, index) => (
              <motion.div
                key={station.stationuuid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <StationCard station={station} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <Radio className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No stations found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse different genres.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Browse;