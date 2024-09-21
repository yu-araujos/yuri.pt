import React from 'react';
import Image from 'next/image';
import profile from '../../images/me.png';

const AboutIntro: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-black bg-opacity-0 w-full p-12">
      <div className="mb-6 lg:mb-0 lg:w-1/2 space-y-4">
        <div className="inline-block border-[1px] border-purple-500 text-purple-500 px-3 py-1 rounded-full text-sm mb-2">
          About Me
        </div>
        <h1 className="text-2xl font-bold text-white">
          Inside My World – <br /> The Story Behind Work
        </h1>
        <p className="text-sm text-gray-400">
        Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape my creative vision.
        </p>
      </div>

      <div className=" hidden relative md:flex w-full lg:w-auto justify-center lg:justify-end items-center">
        <div className="absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-purple-500 z-30 transform xl:-translate-x-56">
          <Image
            src={profile}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-purple-500 bg-opacity-50 z-20 transform  xl:-translate-x-28">
          <Image
            src={profile}
            alt="Image 2"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-purple-500 bg-opacity-15 z-10 transform xl:-translate-x-0">
          <Image
            src={profile}
            alt="Image 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutIntro;
