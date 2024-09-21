/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Profile from './Profile';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between h-full rounded-bl-xl w-72 bg-black bg-opacity-50 border-r-[1px] border-opacity-90 border-gray-700">
      <div className="space-y-6">
        <div className="flex flex-col border-b-[1px] border-opacity-90 border-gray-700 p-6">
          <div className="w-full h-full my-4">
            <Profile /> 
          </div>
          <div className="mt-2"> 
            <h2 className="text-white text-md">Yuri Silva</h2>
            <p className="text-gray-400 text-sm">Full-Stack Developer</p>
          </div>
        </div>
        
        <nav className="flex flex-col space-y-4 px-6 text-sm">
          <Link href="/about" className="text-white hover:text-gray-300">About me</Link>
          <Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
        </nav>
      </div>
      
      <div className="p-6 border-t-[1px] border-opacity-90 border-gray-700">
        <Link href="/contact">
          <button className="w-full py-2 bg-gray-400 bg-opacity-20 text-gray-400 font-medium rounded-lg flex items-center justify-center hover:bg-gray-700">
            Let's Connect <span className="ml-2">↗</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
