import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Radio, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Radio className="h-12 w-12 text-white" />
              </div>
              {/* Radio waves animation */}
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border-2 border-blue-300 rounded-full opacity-50"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 border-2 border-green-300 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Oops! Station Not Found
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            It looks like this radio station has gone off the air. 
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <Link
              to="/browse"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Stations
            </Link>
          </div>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Go back to previous page
          </button>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            While you're here, why not:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link 
              to="/browse" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              • Discover new stations
            </Link>
            <Link 
              to="/about" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              • Learn about Global Radio
            </Link>
            <Link 
              to="/dashboard" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              • Check your favorites
            </Link>
            <Link 
              to="/help" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              • Get help & support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;