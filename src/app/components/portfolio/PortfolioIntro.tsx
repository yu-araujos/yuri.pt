/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import memoji4 from '../../images/me-4.png';
import Link from 'next/link';


const PortfolioIntro: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-black bg-opacity-0 w-full p-6 lg:p-12">
      <div className="mb-6 lg:mb-0 lg:w-1/2 space-y-4">
        <div className='flex flex-row justify-between items-center md:inline-block md:space-y-3'>
          <Link href="/" className='text-yellow-500 lg:hidden mb-2 p-2 flex items-center'>
            <span className='mr-1'>←</span> Voltar ao menu
          </Link>
          <div className="border-[1px] border-yellow-500 text-yellow-500 px-3 py-1 rounded-full text-sm mb-2 text-center">
            <span>Portfolio</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">
          A Gallery of Projects <br /> I'm Proud Of
        </h1>
        <p className="text-sm text-gray-300">
          Explore a collection of projects I'm proud to have built. Each one features a mix of creativity, dedication, bugs, errors in non-existent lines, and most importantly, the satisfaction of finally creating something that works well.
        </p>
      </div>

      <div className=" hidden relative md:flex w-full lg:w-auto justify-center lg:justify-end items-center">
        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-yellow-500 z-30 transform xl:-translate-x-48">
          <Image
            src={memoji4}
            alt="Yuri Silva - memoji"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-yellow-500 bg-opacity-50 z-20 transform  xl:-translate-x-28">
          <p className='text-5xl text-center mt-6'>🖌️</p>
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-yellow-500 bg-opacity-15 z-10 transform xl:-translate-x-10">
          <p className='text-5xl text-center mt-6'>⚙️</p>
        </div>
      </div>

    </div>
  );
};

export default PortfolioIntro;
