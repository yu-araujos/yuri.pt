import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Rick Brown',
    category: 'Website',
    imageSrc: '',
    link: '/portfolio/rick-brown',
  },
  {
    title: 'IT/CONF',
    category: 'Conference',
    imageSrc: '',
    link: '/portfolio/it-conf',
  },
  {
    title: 'ADZEN',
    category: 'Advertising',
    imageSrc: '',
    link: '/portfolio/adzen',
  },
];

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-black bg-opacity-5"
          >
            <div className="absolute">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative p-4 flex flex-col justify-end h-full">
              <h3 className="text-white text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {project.category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
