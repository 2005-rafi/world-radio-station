import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, Book, MessageCircle, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I start listening to a radio station?",
      answer: "Simply browse our station directory, find a station you like, and click the 'Play Station' button. You can also use our interactive 3D globe on the home page to discover stations from different countries."
    },
    {
      question: "Is Global Radio Station free to use?",
      answer: "Yes! Global Radio Station is completely free to use. You can listen to thousands of radio stations without any subscription fees. Creating an account gives you additional features like favorites and playlists."
    },
    {
      question: "How can I save my favorite stations?",
      answer: "Create a free account and click the heart icon on any station card to add it to your favorites. You can access your favorites anytime from your dashboard or the favorites page."
    },
    {
      question: "Can I create custom playlists?",
      answer: "Absolutely! Once you're signed in, you can create custom playlists by grouping your favorite stations. This makes it easy to organize stations by genre, mood, or any other category you prefer."
    },
    {
      question: "Why isn't a station playing?",
      answer: "There could be several reasons: the station might be offline, experiencing technical issues, or your internet connection might be unstable. Try refreshing the page or selecting a different station. If the problem persists, contact our support team."
    },
    {
      question: "How do I search for specific stations or genres?",
      answer: "Use the search bar on the Browse page to find stations by name, country, or genre. You can also use our advanced filters to narrow down results by country, language, or musical style."
    },
    {
      question: "Can I suggest a station to be added?",
      answer: "We'd love your suggestions! Contact us through the support form below with the station's name, website, and streaming URL. Our team will review and consider adding it to our directory."
    },
    {
      question: "How does the recommendation system work?",
      answer: "Our recommendation engine analyzes your listening history, favorite stations, and genres to suggest new stations you might enjoy. The more you use the platform, the better our recommendations become."
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours",
      action: "Call Now",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const quickGuides = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Global Radio Station",
      icon: Book,
      color: "text-blue-600",
    },
    {
      title: "Account Management",
      description: "How to manage your profile and preferences",
      icon: Book,
      color: "text-green-600",
    },
    {
      title: "Technical Issues",
      description: "Troubleshooting common problems",
      icon: Book,
      color: "text-orange-600",
    },
    {
      title: "Features Guide",
      description: "Explore all available features and tools",
      icon: Book,
      color: "text-purple-600",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions, browse our guides, or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Guides */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickGuides.map((guide, index) => (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className={`inline-flex p-3 rounded-lg mb-4 ${guide.color} bg-gray-50`}>
                      <guide.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600">
                      {guide.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* FAQs */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" />
                Get Support
              </h3>
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <motion.button
                    key={option.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className={`w-full p-4 ${option.bg} rounded-lg text-left hover:shadow-md transition-all duration-200`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 ${option.color} bg-white rounded-lg`}>
                        <option.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {option.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {option.description}
                        </p>
                        <span className={`text-sm font-medium ${option.color}`}>
                          {option.action} →
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Technical Issue</option>
                    <option>Feature Request</option>
                    <option>Account Help</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4">
                Need More Help?
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Our comprehensive knowledge base has detailed guides and tutorials.
              </p>
              <button className="w-full py-2 px-4 bg-white text-blue-600 font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                Browse Knowledge Base
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;