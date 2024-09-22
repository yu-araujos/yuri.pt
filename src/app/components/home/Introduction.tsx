/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import memoji3 from '../../images/me-3.png';


const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-black bg-opacity-10 w-full h-full p-6 lg:mb-6 border-b-[1px] border-opacity-90 border-gray-700">
      <div className='flex justify-center mb-3'>
        <Image
          src={memoji3} 
          alt="Yuri Silva - memoji"
          width={100}
          height={100}
          className="rounded-full object-cover bg-gray-700 bg-opacity-20"
        />
      </div>

      <div>
        <h1 className="text-2xl  font-bold text-white text-center">
        👋 Hello, I'm Yuri Silva 
        </h1>
        <p className="lg:w-1/3 text-1xl text-gray-400 text-center mx-auto mt-2">
        As a full-stack developer, I love turning code into engaging and creative digital experiences. I bring my ideas to life, and I can bring yours to life too. How about we build something amazing together?
        </p>
      </div>
    </div>
  );
};

export default Introduction;
