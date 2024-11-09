import React from 'react';
import Image from 'next/image';
import graphics from '../assets/cc.png';

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">About Me</h2>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Hello! I'm Umm e Aiman, a CS student with a love for creating dynamic and user-friendly web applications. I thrive in collaborative environments where I can learn and grow.
      </p>
      <p className="text-lg text-gray-700 mb-4 text-center">
        I've worked on various small projects that have enhanced my skills and broadened my knowledge. I am passionate about exploring the ever-evolving landscape of technology. My journey is marked by a commitment to continuous learning, as I actively seek out new skills and challenges that expand my expertise.
      </p>
      <p className="text-lg text-gray-700 mb-8 text-center">
        When I'm not coding, you can find me reading books. I'm always excited to connect with like-minded individuals, so feel free to reach out!
      </p>

      <div className="flex justify-center">
        <Image
          src={graphics}
          alt="about-pic"
          className="w-96 h-96 object-cover"
        />
      </div>
    </section>
  );
};

export default About;