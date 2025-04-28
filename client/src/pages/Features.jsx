import React from 'react';

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 pt-40 pb-20"> {/* Added pt-40 for top spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20"> {/* Increased mb-20 for more space */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ROADMAP FINDER
          </h1>
          <div className="flex justify-center space-x-8 mb-16">
            {['Features', 'Pricing', 'Roadmap', 'Sign In', 'Sign Up'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to plan and execute your learning journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
          {[
            {
              title: "Personalized Roadmaps",
              description: "Create personalized learning paths for any skill",
              icon: "📊"
            },
            {
              title: "Progress Tracking",
              description: "Monitor your advancement through each roadmap",
              icon: "✅"
            },
            {
              title: "Community Resources",
              description: "Access curated resources from experts",
              icon: "👥"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all border border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}