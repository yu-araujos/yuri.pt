/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';


const Soon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-white space-y-8">
      <h1 className="text-4xl font-bold">Oops! 🥺</h1>
      <p className="text-lg text-center max-w-2xl">
        I know you're eager to check out my projects, but right now, I'm in the middle of a big makeover for all my work! 
        But don't worry, it's all for the best. 🛠️ In the meantime, feel free to follow me on LinkedIn or GitHub, where I'll 
        be sharing updates whenever I can. Stay tuned!
      </p>
      <div className="flex space-x-4">
      <Link href="https://linkedin.com/in/yuriaraujoo" target='__blank' className="bg-yellow-500 bg-opacity-25 text-yellow-200 px-4 py-2 rounded-full text-center font-semibold hover:bg-opacity-50 transition">
            LinkedIn
        </Link>
        <Link href="https://github.com/yu-araujos" target='__blank' className="bg-yellow-500 bg-opacity-25 text-yellow-200 px-4 py-2 rounded-full text-center font-semibold hover:bg-opacity-50 transition">
            GitHub
        </Link>
      </div>
    </div>
  );
};

export default Soon;
