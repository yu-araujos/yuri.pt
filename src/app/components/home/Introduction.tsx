/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import profile from '../../images/me.png';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-black bg-opacity-10 w-full p-6 lg:mb-6 border-b-[1px] border-opacity-90 border-gray-700">
      <div className='flex justify-center mb-3'>
        <Image
          src={profile} 
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full object-cover bg-gray-700 bg-opacity-20"
        />
      </div>

      <div>
        <h1 className="text-2xl  font-bold text-white text-center">
        👋 Hello, I'm Yuri Silva 
        </h1>
        <p className="lg:w-1/2 text-1xl text-gray-400 text-center mx-auto mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti deserunt cupiditate cumque perferendis rem nisi laborum similique quidem tempore blanditiis.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
