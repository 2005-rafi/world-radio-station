import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PlayerProvider } from './context/PlayerContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AudioPlayer from './components/player/AudioPlayer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <PlayerProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="pb-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <AudioPlayer />
            <Footer />
          </div>
        </Router>
      </PlayerProvider>
    </AuthProvider>
  );
}

export default App;