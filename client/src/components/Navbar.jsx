import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left corner */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              ROADMAP FINDER
            </span>
          </Link>

          {/* Desktop Navigation - Right corner */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/roadmap" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Roadmap
            </Link>
            <Link 
              to="/signin" 
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-3 space-y-4">
            <Link 
              to="/features" 
              className="block text-gray-300 hover:text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block text-gray-300 hover:text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/roadmap" 
              className="block text-gray-300 hover:text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link 
              to="/signin" 
              className="block text-gray-300 hover:text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}