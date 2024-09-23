import React from 'react';
import Image from 'next/image';
import memoji1 from '../../images/me.png';
import memoji2 from '../../images/me-2.png';
import memoji3 from '../../images/me-3.png';
import Link from 'next/link';

const AboutIntro: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-black bg-opacity-0 w-full p-6 lg:p-12">
      <div className="my-6 lg:mb-0 lg:w-1/2 space-y-4">
        <div className='flex flex-row justify-between items-center md:inline-block md:space-y-3'>
          <Link href="/" className='text-purple-500 lg:hidden mb-2 p-2 flex items-center'>
            <span className='mr-1'>←</span> Voltar ao menu
          </Link>
          <div className="border-[1px] border-purple-500 text-purple-500 px-3 py-1 rounded-full text-sm mb-2 text-center">
            <span>About Me</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white">
          Inside My World <br /> The Story Behind Work
        </h1>
        <p className="text-md text-gray-400">
          Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape me.
        </p>
      </div>

      <div className=" hidden relative md:flex w-full lg:w-auto justify-center lg:justify-end items-center">
        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-purple-500 z-30 transform xl:-translate-x-48">
          <Image
            src={memoji2}
            alt="Yuri Silva - memoji"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-purple-500 bg-opacity-50 z-20 transform  xl:-translate-x-28">
          <Image
            src={memoji1}
            alt="Yuri Silva - memoji"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-purple-500 bg-opacity-15 z-10 transform xl:-translate-x-10">
          <Image
            src={memoji3}
            alt="Yuri Silva - memoji"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutIntro;
