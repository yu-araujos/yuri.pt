/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Profile from './Profile';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between h-full rounded-bl-xl w-72 bg-black bg-opacity-50 border-r-[1px] border-opacity-10 border-gray-300">
      <div className="space-y-6">
        <div className="flex flex-col border-b-[1px] border-opacity-10 border-gray-300 p-6">
          <div className="w-full h-full my-4">
            <Profile /> 
          </div>
          <div className="mt-2"> 
            <h2 className="text-white text-lg">Yuri Silva</h2>
            <p className="text-gray-400 text-md">Full-Stack Developer</p>
          </div>
        </div>
        
        <nav className="flex flex-col space-y-4 px-6 text-lg">
          <Link href="/">
            <div className="relative group">
              <div className="absolute left-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <span className="block pl-4 text-white group-hover:text-gray-300 transition-all">Home</span>
            </div>
          </Link>
          <Link href="/about">
            <div className="relative group">
              <div className="absolute left-0 h-full w-1 bg-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <span className="block pl-4 text-white group-hover:text-gray-300 transition-all">About me</span>
            </div>
          </Link>
          <Link href="/portfolio">
            <div className="relative group">
              <div className="absolute left-0 h-full w-1 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <span className="block pl-4 text-white group-hover:text-gray-300 transition-all">Portfolio</span>
            </div>
          </Link>
        </nav>
      </div>
      
      <div className="p-6 border-t-[1px] border-opacity-10 border-gray-300">
        <Link href="/contact">
          <button className="w-full py-2 bg-gray-300 bg-opacity-10 text-gray-400 font-medium rounded-lg flex items-center justify-center hover:bg-gray-700 transition ease-in">
            Let's Connect <span className="ml-2">↗</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
