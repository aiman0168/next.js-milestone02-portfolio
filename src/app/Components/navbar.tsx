'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">
          <Link href="/">My Portfolio</Link>
        </h1>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          className={`lg:flex lg:space-x-6 space-y-4 lg:space-y-0 lg:block absolute lg:static left-0 right-0 top-16 bg-blue-600 lg:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>

      
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-blue-600 p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-4rem)]`}
      >
        <ul>
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;