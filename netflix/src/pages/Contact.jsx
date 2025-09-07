import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#111] min-h-screen px-6 py-16 text-white font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-red-600 text-center mb-8 fadeInUp delay-200">
        Contact Us
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-center text-gray-300 fadeInUp delay-400">
        We would love to hear from you! Use the form below or our social links to reach out.
      </p>
      <div className="max-w-3xl mx-auto bg-[#222] p-8 rounded-xl shadow-lg fadeInUp delay-600">
        <form className="flex flex-col space-y-6">
          <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"/>
          <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"/>
          <textarea placeholder="Your Message" rows="5" className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"></textarea>
          <button type="submit" className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-center space-x-6 mt-12 fadeInUp delay-800">
        <a href="#" className="text-blue-500 hover:text-blue-400 transition duration-300">Facebook</a>
        <a href="#" className="text-pink-500 hover:text-pink-400 transition duration-300">Instagram</a>
        <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">Twitter</a>
        <a href="#" className="text-red-500 hover:text-red-400 transition duration-300">YouTube</a>
      </div>
    </div>
  );
};

export default Contact;
