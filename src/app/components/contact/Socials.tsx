import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-30 p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">
        <span role="img" aria-label="Check">✅</span> Follow Me
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <Link href="https://www.linkedin.com/in/yuriaraujoo/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-700 p-3 rounded-md text-white hover:bg-gray-600">
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://github.com/yu-araujos" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-700 p-3 rounded-md text-white hover:bg-gray-600">
          <FaGithub size={24} />
        </Link>

      </div>
    </div>
  );
};

export default Socials;
