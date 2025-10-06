import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Music, Users, Heart, Radio, Star, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access thousands of radio stations from over 200 countries worldwide.'
    },
    {
      icon: Music,
      title: 'All Genres',
      description: 'Discover music from every genre, from classical to contemporary hits.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join millions of music lovers sharing their favorite stations.'
    },
    {
      icon: Heart,
      title: 'Personalized',
      description: 'Get recommendations based on your listening preferences.'
    },
  ];

  const stats = [
    { icon: Radio, value: '50,000+', label: 'Radio Stations' },
    { icon: Globe, value: '200+', label: 'Countries' },
    { icon: Users, value: '1M+', label: 'Active Users' },
    { icon: Star, value: '4.8/5', label: 'User Rating' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      description: 'Former Spotify executive with 10+ years in digital music.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: 'Tech veteran specializing in audio streaming technology.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Award-winning UX designer passionate about music interfaces.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      description: 'Full-stack developer with expertise in real-time audio streaming.'
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Best Music App 2024',
      description: 'Recognized by TechRadar for innovation in radio streaming.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Average station load time under 2 seconds globally.'
    },
    {
      icon: Heart,
      title: '4.8★ Rating',
      description: 'Highest rated radio app across all platforms.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting the World Through{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Music
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Global Radio Station was born from a simple idea: music has no borders. 
              We've built the world's most comprehensive platform for discovering and enjoying 
              radio stations from every corner of the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that radio is one of the most intimate and immediate ways to connect 
                with cultures around the world. Whether it's discovering underground hip-hop from 
                Seoul, classical music from Vienna, or news from São Paulo, we're here to break 
                down barriers and bring the world's voices to your speakers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform combines cutting-edge technology with thoughtful design to create 
                an experience that's both powerful and intuitive, making global discovery as 
                simple as clicking play.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center space-y-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-white/20 rounded-lg">
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-blue-100">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined how people discover and enjoy radio, combining innovative technology 
              with a deep respect for the medium's cultural importance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence has been recognized by users and industry experts alike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50 rounded-xl"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate individuals united by our love for music and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Global Music Community
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey of musical discovery today. Connect with cultures, 
              discover new sounds, and become part of our worldwide community.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Start Exploring Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;