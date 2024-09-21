/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import profile from '../../images/me.png';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-black bg-opacity-10 w-full p-6 mb-6 border-b-[1px] border-opacity-90 border-gray-700">
      <div>
        <Image
          src={profile} 
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full object-cover bg-gray-700 bg-opacity-20"
        />
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl w-8/12 font-bold text-white">
          Hello, I'm Yuri 👋 
        </h1>
        <p className="w-1/2 text-1xl text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti deserunt cupiditate cumque perferendis rem nisi laborum similique quidem tempore blanditiis.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
