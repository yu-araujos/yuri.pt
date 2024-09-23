/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const ContactIntro: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-black bg-opacity-0 w-full p-6">
      <div className="mb-6 lg:mb-0 lg:w-1/2 space-y-4">
        <div className='flex flex-row justify-between items-center md:inline-block md:space-y-3'>
          <Link href="/" className='text-green-500 lg:hidden mb-2 p-2 flex items-center'>
            <span className='mr-1'>←</span> Voltar ao menu
          </Link>
          <div className="border-[1px] border-green-500 text-green-500 px-3 py-1 rounded-full text-sm mb-2 text-center">
            <span>Contact</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">
          Let's Connect and Collaborate
        </h1>
        <p className="text-md text-gray-400">
          Reach out to discuss your project or ideas. I’m here to provide support and turn your vision into reality. I'm always open to new opportunities and collaborations that may come my way.
        </p>
      </div>

      <div className=" hidden relative md:flex w-full lg:w-auto justify-center lg:justify-end items-center">
        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-green-500 z-30 transform xl:-translate-x-48">
          <p className='text-5xl text-center mt-6'>📞</p>
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-green-500 bg-opacity-50 z-20 transform  xl:-translate-x-28">
          <p className='text-5xl text-center mt-6'>📧</p>
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-green-500 bg-opacity-15 z-10 transform xl:-translate-x-10">
          <p className='text-5xl text-center mt-6'>📓</p>
        </div>
      </div>

    </div>
  );
};

export default ContactIntro;
