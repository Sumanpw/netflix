import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#141414] to-[#1f1f1f] min-h-screen px-6 py-16 text-white font-sans">
      <h1 className="text-5xl text-center mb-8 font-extrabold text-red-600 fadeInUp delay-200">
        About Our Netflix Clone
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-center text-gray-300 fadeInUp delay-400">
        Welcome to our <span className="text-red-500 font-semibold">Netflix clone</span>! Built with 
        <span className="text-yellow-400 font-medium"> React</span> and 
        <span className="text-blue-400 font-medium"> React Router</span>, it provides a smooth and interactive experience.
      </p>
      <div className="bg-[#222] rounded-xl p-8 mb-12 max-w-4xl mx-auto shadow-lg fadeInUp delay-600">
        <h2 className="text-3xl md:text-4xl mb-6 font-bold text-green-400 text-center">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-200">
          <li>Fixed navigation bar for easy access.</li>
          <li>Home page with welcoming layout.</li>
          <li>Products page with organized items.</li>
          <li>Fully responsive design for all screens.</li>
        </ul>
      </div>
      <div className="bg-[#2a2a2a] rounded-xl p-8 max-w-4xl mx-auto shadow-lg fadeInUp delay-800">
        <h2 className="text-3xl md:text-4xl mb-6 font-bold text-pink-500 text-center">
          Technology Stack
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center">
          React, React Router, and Tailwind CSS provide a modern, Netflix-style experience.
        </p>
      </div>
    </div>
  );
};

export default About;
