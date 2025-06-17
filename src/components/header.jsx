import React, { useState, useEffect } from "react";
import "../index.css";
import logo from "../assets/n.png";
import resume from "../assets/YASH-PANDEY-RESUME.pdf"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 md:py-4">
        <div className="flex items-center space-x-2">
          <a href="#home" className="group relative">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <img
                src={logo}
                alt="Logo"
                className={`w-full h-full transition-all duration-300 group-hover:translate-[-5px_-5px] group-hover:opacity-80 ${isLogoAnimated ? 'logo-animation' : ''}`}
              />
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#aboutme" className="relative text-lg group">
              <span className="underline-effect">About me</span>
            </a>
            <a href="#history" className="relative text-lg group">
              <span className="underline-effect">Experience</span>
            </a>
            <a href="#projects" className="relative text-lg group">
              <span className="underline-effect">Projects</span>
            </a>
            <a href="#contact" className="relative text-lg group">
              <span className="underline-effect">Contact</span>
            </a>
          </nav>
          <a
          href={resume} download="Yash Pandey-RESUME.pdf"
            className="px-6 py-2 bg-black border-2 border-blue-500 text-blue-500 font-semibold text-sm rounded-md shadow-md hover:shadow-lg hover:bg-blue-500 hover:text-white hover:border-black hover:scale-105 transition-transform duration-300"
          >
            Resume
          </a>


        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md z-40">
          <div className="fixed top-0 right-0 h-screen w-2/5 bg-black text-white z-50 shadow-lg">
            <div className="flex flex-col justify-start items-start p-8 space-y-6">
              <button
                onClick={toggleMenu}
                className="absolute top-8 sm:top-6 right-6 text-white hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <nav className="flex flex-col space-y-6 text-left">
                <a
                  href="#aboutme"
                  className="text-md sm:text-lg text-gray-300 hover:text-blue-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#history"
                  className="text-md sm:text-lg text-gray-300 hover:text-blue-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-md sm:text-lg text-gray-300 hover:text-blue-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-md sm:text-lg text-gray-300 hover:text-blue-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-500  border-2 border-blue-500 px-2 sm:px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                  onClick={toggleMenu}
                >
                  Resume
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
