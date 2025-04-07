import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">
          Job Scheduling System
        </h1>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 text-white hover:bg-blue-600">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">
              Signup
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Welcome to the Job Scheduling System
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          This application helps you track and manage job applications
          efficiently — from applying to interviews, offers, and follow-ups.
          Stay organized and level up your job hunt!
        </p>
      </main>
    </div>
  );
};

export default WelcomePage;
