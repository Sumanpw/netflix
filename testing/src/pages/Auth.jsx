import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Logging in with:", { email, password });
      // 👉 connect to backend login API here
      navigate("/products"); // redirect after login
    } else {
      console.log("Signing up with:", { email, password });
      // 👉 connect to backend signup API here
      setIsLogin(true); // after signup, go to login page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-md text-black focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-md text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 py-3 rounded-md font-bold transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isLogin ? (
            <>
              New to Netflix?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-red-500 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-red-500 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
