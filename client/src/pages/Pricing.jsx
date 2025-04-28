import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For your hobby projects",
      features: [
        "Free e-mail alerts",
        "3-minute checks",
        "Automatic data enrichment",
        "10 monitors",
        "Up to 3 seats"
      ],
      cta: "Get started for free",
      featured: false
    },
    {
      name: "Pro",
      price: "$5",
      description: "Great for small businesses",
      features: [
        "Unlimited phone calls",
        "30-second checks",
        "Single-user accounts",
        "20 monitors",
        "Up to 6 seats"
      ],
      cta: "Get started with Pro",
      featured: true
    },
    {
      name: "Enterprise",
      price: "$12",
      description: "For multiple teams",
      features: [
        "Everything in Pro",
        "Up to 5 team members",
        "100 monitors",
        "15 status pages",
        "200+ integrations"
      ],
      cta: "Get started with Enterprise",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            ROADMAP FINDER
          </h1>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Plans and Pricing</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Receive unlimited credits when you pay yearly, and save on your plan.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 border-2 transition-all ${
                plan.featured 
                  ? 'border-blue-500 bg-gray-800 transform scale-105' 
                  : 'border-gray-700 bg-gray-800 hover:border-gray-600'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{plan.name} <span className="text-blue-400">{plan.price}</span></h3>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  plan.featured
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/20'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}