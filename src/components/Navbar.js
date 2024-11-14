import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300 transition">Movie Tracker</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/movies" className="hover:text-gray-300 transition">Movies</Link>
          <Link to="/my-list" className="hover:text-gray-300 transition">My List</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
          <button onClick={toggleDarkMode} className="p-2 focus:outline-none rounded-full">
            {isDarkMode ? (
              <span role="img" aria-label="sun" className="text-yellow-300">☀️</span>
            ) : (
              <span role="img" aria-label="moon" className="text-blue-300">🌙</span>
            )}
          </button>
          {/* User Profile Picture and Dropdown */}
          <div className="relative transition transform hover:scale-105">
            <img
              src="https://avatars.githubusercontent.com/u/124456653?v=4"
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2">
                <a
                  href="https://www.linkedin.com/in/mubashirahmad223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Mubashir24241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href="https://mubashirportfolio231.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105"
                >
                  Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
