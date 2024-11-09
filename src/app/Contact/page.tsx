'use client';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import graphics from '../assets/gg.png';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Me</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        If you'd like to connect, feel free to reach out through my social media profiles:
      </p>

      <ul className="flex justify-center space-x-8 mb-8">
        <li className="flex items-center space-x-2">
          <FaTwitter color="#1DA1F2" className="h-6 w-6" />
          <a
            href="https://x.com/Aiman56693?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-lg"
          >
            Twitter
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaLinkedin color="#0077B5" className="h-6 w-6" />
          <a
            href="https://www.linkedin.com/in/umm-e-aiman-26a05824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-600 text-lg"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaGithub color="000000" className="h-6 w-6" />
          <a
            href="https://github.com/aiman0168"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700 text-lg"
          >
            GitHub
          </a>
        </li>
      </ul>

      <div className="flex justify-center"><Image src={graphics} alt="contact-pic" className="w-96 h-96 object-cover mb-5"/>
      </div>
    </section>
  );
};

export default Contact;
