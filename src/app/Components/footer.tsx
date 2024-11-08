import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 max-w-full">
        <nav className="flex justify-center">
          <Link
            href="https://www.linkedin.com/in/umm-e-aiman-26a05824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="text-white hover:text-gray-400 transition-colors"
          >
            Made by Umm e Aiman
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;