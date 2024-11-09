import React from 'react';
import Image from 'next/image';
import Resume from './Components/resume';
import Profilepic from './assets/profile.jpg';

const App: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-4 lg:px-8">
      <div className="max-w-screen-lg mx-auto bg-blue-600 text-white p-6 rounded-lg shadow-xl flex justify-center mb-10">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Hello! Its Me</h3>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Umm e Aiman</h1>
          <h3 className="text-2xl sm:text-3xl mb-4">
            And I am a <span className="text-yellow-300">Frontend Developer</span>
          </h3>
          <div className="mb-4 flex justify-center">
            <Image
              src={Profilepic}
              alt="profile-pic"
              className="rounded-full mx-auto sm:mx-0"
              width={300}
              height={300}
            />
          </div>
          <Resume/>
        </div>
      </div>
    </div>
  );
};

export default App;
