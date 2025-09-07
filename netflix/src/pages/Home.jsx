import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://flixnet.epizy.com/wp-content/uploads/2023/03/IN-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔥 Full-page black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Unlimited movies, TV shows and more.
        </h1>
        <p className="text-xl mb-4 drop-shadow-md">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-lg mb-8 drop-shadow-md">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* 🔥 Email Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded-md text-black w-72 sm:w-96 focus:outline-none"
          />
          <button
            onClick={() => navigate("/auth")}
            className="bg-red-600 hover:bg-red-500 py-3 px-6 rounded-md font-bold transition duration-300 w-40"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
