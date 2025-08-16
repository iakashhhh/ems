import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }
    handleLogin(email, password);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl bg-gray-850 shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-3">
            Employee Management System
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Access your Employee Management System account
          </p>
        </div>

        {error && (
          <p className="bg-red-600/20 text-red-400 text-center py-2 px-4 rounded mb-6 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-gray-600 bg-gray-900 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm md:text-base"
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-gray-600 bg-gray-900 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm md:text-base"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-500 hover:bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 text-sm md:text-base transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-xs md:text-sm">
          &copy; 2025 Employee Management System
        </div>
      </div>
    </div>
  );
};

export default Login;
