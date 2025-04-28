import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.png';

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set loaded to true after component mounts
    setLoaded(true);
  }, []);

  const suggestions = [
    { label: "Web Development", path: "/web-development" },
    { label: "Machine Learning", path: "/machine-learning" },
    { label: "Software Development", path: "/software-development" },
    { label: "Mobile App Development", path: "/mobile-app-development" },
    { label: "Cybersecurity", path: "/cybersecurity" }
  ];

  const handleSelectSuggestion = (path) => {
    navigate(path);
    setSearchOpen(false);
    setSearchText('');
  };

  return (
    <div 
      className="min-h-screen pt-18 bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black/60 min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 typewriter-animation cursor">
  ROADMAP <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">FINDER</span>
</h1>


          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Your ultimate guide to success, helping you navigate life's journey with clarity and confidence
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search roadmaps..."
              className="w-full py-4 px-6 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 placeholder-gray-500 transition-all duration-300 hover:shadow-md"
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Suggestions Dropdown */}
            {searchOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden z-50">
                {suggestions
                  .filter((item) => item.label.toLowerCase().includes(searchText.toLowerCase()))
                  .map((item, index) => (
                    <div
                      key={index}
                      className="px-6 py-3 hover:bg-gray-700 cursor-pointer text-white text-left transition-colors"
                      onMouseDown={() => handleSelectSuggestion(item.path)}
                    >
                      {item.label}
                    </div>
                  ))}
                {suggestions.filter((item) => item.label.toLowerCase().includes(searchText.toLowerCase())).length === 0 && (
                  <div className="px-6 py-3 text-gray-400">No matches found</div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Features', 'Pricing', 'Roadmap', 'Sign In'].map((item, index) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '-')}
                className="group bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-400/50 text-center hover:-translate-y-1"
              >
                <div className="text-blue-400 mb-3 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white transition-all duration-300">
                  {item}
                </h3>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}