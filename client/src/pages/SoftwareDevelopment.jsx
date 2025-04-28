import React from "react";
import { motion } from "framer-motion";

const SoftwareDevelopment = () => {
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

  // YouTube channel data with thumbnails
  const youtubeChannels = {
    english: [
      {
        name: "ThePrimeagen",
        url: "https://www.youtube.com/@ThePrimeagen",
        thumbnail: "https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg"
      },
      {
        name: "Fireship",
        url: "https://www.youtube.com/@Fireship",
        thumbnail: "https://i.ytimg.com/vi/NtfbWkxJTHw/maxresdefault.jpg"
      }
    ],
    educational: [
      {
        name: "CS Dojo",
        url: "https://www.youtube.com/@CSDojo",
        thumbnail: "https://i.ytimg.com/vi/gR8QvFmNuLE/maxresdefault.jpg"
      },
      {
        name: "Tech With Tim",
        url: "https://www.youtube.com/@TechWithTim",
        thumbnail: "https://i.ytimg.com/vi/JJmcL1N2KQs/maxresdefault.jpg"
      }
    ]
  };

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
            Software Development Roadmap
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Your comprehensive guide to becoming a professional software engineer
          </motion.p>
        </motion.section>

        {/* Introduction */}
        <motion.section 
          className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction to Software Development</h2>
          <p className="text-gray-300 leading-relaxed">
            Software development is the process of conceiving, designing, programming, testing, and maintaining applications, frameworks, and other software components. It involves writing clean, efficient code to solve real-world problems while following best practices in architecture, security, and performance. Modern software development encompasses various methodologies like Agile and DevOps, and requires understanding of algorithms, data structures, system design, and version control. Software engineers work across industries to build everything from mobile apps to enterprise systems.
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
                "Learn programming fundamentals (variables, loops, functions)",
                "Master data structures and algorithms",
                "Understand object-oriented programming principles",
                "Learn version control with Git and GitHub",
                "Study system design and architecture patterns",
                "Practice software testing methodologies",
                "Explore DevOps and CI/CD pipelines"
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
                "Choose a programming language (Python, Java, JavaScript, etc.)",
                "Solve coding problems on platforms like LeetCode",
                "Build small projects to apply your knowledge",
                "Learn about databases and data modeling",
                "Study common design patterns",
                "Contribute to open source projects",
                "Prepare for technical interviews"
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
              { name: "Python Documentation", url: "https://docs.python.org/3/" },
              { name: "Java Documentation", url: "https://docs.oracle.com/en/java/" },
              { name: "Git Documentation", url: "https://git-scm.com/doc" }
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

        {/* YouTube Channels */}
        <motion.section 
          className="mb-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Best YouTube Channels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Channels */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Professional Development</h3>
              <div className="space-y-4">
                {youtubeChannels.english.map((channel, index) => (
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
            
            {/* Educational Channels */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Educational Content</h3>
              <div className="space-y-4">
                {youtubeChannels.educational.map((channel, index) => (
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
                { name: "CS50: Introduction to Computer Science (Harvard)", url: "https://cs50.harvard.edu/" },
                { name: "The Complete Software Developer's Career Guide", url: "https://www.udemy.com/course/the-complete-software-developers-career-guide/" },
                { name: "Data Structures and Algorithms Specialization (Coursera)", url: "https://www.coursera.org/specializations/data-structures-algorithms" }
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
                "Task Management Application",
                "E-commerce Platform",
                "Social Media API",
                "Weather Dashboard",
                "Code Review Tool",
                "Personal Finance Tracker"
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
          <h2 className="text-2xl font-bold mb-6 text-pink-400">Benefits of Software Development</h2>
          <ul className="space-y-4">
            {[
              "High demand across all industries",
              "Competitive salaries and career growth",
              "Opportunity to work remotely",
              "Creative problem-solving challenges",
              "Continuous learning and skill development",
              "Ability to build products that impact millions"
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

export default SoftwareDevelopment;