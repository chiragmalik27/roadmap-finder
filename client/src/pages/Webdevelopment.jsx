import React from "react";
import { motion } from "framer-motion";

const Webdevelopment = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // YouTube channel data with proper placeholders
  const hindiChannels = [
    {
      name: "CodeWithHarry",
      url: "https://www.youtube.com/@CodeWithHarry",
      color: "blue"
    },
    {
      name: "Apna College",
      url: "https://www.youtube.com/@ApnaCollegeOfficial",
      color: "green"
    }
  ];

  const englishChannels = [
    {
      name: "freeCodeCamp",
      url: "https://www.youtube.com/@freecodecamp",
      color: "purple"
    },
    {
      name: "Traversy Media",
      url: "https://www.youtube.com/@TraversyMedia",
      color: "red"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-8 p-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Web Development Roadmap
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Your comprehensive guide to becoming a professional web developer
          </motion.p>
        </motion.section>

        {/* Introduction */}
        <motion.section 
          className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction to Web Development</h2>
          <p className="text-gray-300 leading-relaxed">
            Web development involves building and maintaining websites and web applications. It covers everything from creating simple static pages to complex web-based applications, e-commerce sites, and social network services. Web development typically includes two main areas: front-end development and back-end development. Front-end development focuses on the parts of a website that users interact with directly, using technologies like HTML, CSS, and JavaScript. Back-end development, on the other hand, deals with server-side operations, databases, and application logic, often using languages like Python, PHP, Java, or Node.js. Together, these areas ensure that websites are not only visually appealing but also functional, secure, and efficient.
          </p>
        </motion.section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Roadmap Overview */}
          <motion.section 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Roadmap Overview</h2>
            <ul className="space-y-4">
              {[
                "Learn HTML, CSS, and JavaScript (Frontend Basics)",
                "Master a Frontend Framework (React, Vue, Angular)",
                "Understand Backend Development (Node.js, Django, PHP)",
                "Work with Databases (MongoDB, MySQL, PostgreSQL)",
                "Learn about APIs (REST, GraphQL)",
                "Version Control (Git & GitHub)",
                "Hosting and Deployment (Vercel, Netlify, AWS)"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-blue-400 mr-2">▹</span>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Steps to Learn */}
          <motion.section 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-green-400">Steps to Start Learning</h2>
            <ol className="space-y-4">
              {[
                "Start with basic HTML and CSS",
                "Practice JavaScript and build small projects",
                "Learn Responsive Design and CSS Frameworks (like TailwindCSS or Bootstrap)",
                "Choose a Frontend Library (like React.js) and master it",
                "Understand how the Backend works and learn Node.js or any other backend technology",
                "Integrate database operations in your applications",
                "Build Full-Stack Projects and host them online"
              ].map((step, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-yellow-400 font-bold mr-3">{index + 1}.</span>
                  <span className="text-gray-300">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.section>
        </div>

        {/* Documentation */}
        <motion.section 
          className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Official Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "MDN Web Docs (HTML, CSS, JS)", url: "https://developer.mozilla.org/en-US/" },
              { name: "React Official Docs", url: "https://react.dev/" },
              { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" }
            ].map((doc, index) => (
              <motion.a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 rounded-lg p-4 transition-all duration-300 flex items-center"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-blue-400 hover:text-blue-300 transition-colors">{doc.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Updated YouTube Channels section with working thumbnails */}
        <motion.section 
          className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Best YouTube Channels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hindi Channels */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Hindi</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "CodeWithHarry",
                    url: "https://www.youtube.com/@CodeWithHarry",
                    thumbnail: "https://i.ytimg.com/vi/6mbwJ2xhgzM/maxresdefault.jpg"
                  },
                  {
                    name: "Apna College",
                    url: "https://www.youtube.com/@ApnaCollegeOfficial",
                    thumbnail: "https://i.ytimg.com/vi/ER9SspLe4Hg/maxresdefault.jpg"
                  }
                ].map((channel, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                  >
                    <a 
                      href={channel.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block"
                    >
                      <div className="relative h-40 w-full">
                        <img 
                          src={channel.thumbnail} 
                          alt={channel.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/800x450?text=Thumbnail+Not+Available";
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="bg-red-600 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center">
                          <span className="text-blue-400 mr-2">▶</span>
                          <span className="text-gray-200 font-medium text-lg">{channel.name}</span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* English Channels */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">English</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "freeCodeCamp",
                    url: "https://www.youtube.com/@freecodecamp",
                    thumbnail: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg"
                  },
                  {
                    name: "Traversy Media",
                    url: "https://www.youtube.com/@TraversyMedia",
                    thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg"
                  }
                ].map((channel, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                  >
                    <a 
                      href={channel.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block"
                    >
                      <div className="relative h-40 w-full">
                        <img 
                          src={channel.thumbnail} 
                          alt={channel.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/800x450?text=Thumbnail+Not+Available";
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="bg-red-600 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center">
                          <span className="text-blue-400 mr-2">▶</span>
                          <span className="text-gray-200 font-medium text-lg">{channel.name}</span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Courses & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Courses */}
          <motion.section 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">Recommended Courses</h2>
            <ul className="space-y-4">
              {[
                { name: "The Complete Web Development Bootcamp (Udemy)", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
                { name: "Meta Front-End Developer Certificate (Coursera)", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer" },
                { name: "CS50's Web Programming with Python and JavaScript (Harvard)", url: "https://cs50.harvard.edu/web/" }
              ].map((course, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={course.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-start">
                    <span className="text-pink-400 mr-2">★</span>
                    {course.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Project Ideas */}
          <motion.section 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-red-400">Project Ideas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personal Portfolio Website",
                "Blog Application",
                "E-commerce Store",
                "Social Media Dashboard",
                "Weather Forecast App",
                "Real-time Chat Application"
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-4 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-400 mr-3"></div>
                    <span className="text-gray-300">{project}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Benefits */}
        <motion.section 
          className="mb-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-blue-700/30"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-pink-400">Benefits of Learning Web Development</h2>
          <ul className="space-y-4">
            {[
              "High demand for skilled developers",
              "Remote work opportunities",
              "Ability to build your own projects/startups",
              "Freelancing and side hustle options",
              "Continuous learning and growth",
              "Opportunity to work on impactful global products"
            ].map((benefit, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-green-400 mr-2">✔️</span>
                <span className="text-gray-300">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Webdevelopment;