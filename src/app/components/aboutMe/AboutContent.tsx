import React from 'react';
import TimelineItem from './TimelineItem';

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-24 p-6 text-white">
      {/* Seção 1: Descrição */}
      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-1/4">✨ The Drive, Passion, and Vision Behind My Work</h2>
        <p className="text-sm text-gray-400 lg:w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, debitis eveniet! Labore ad quasi, enim ipsum veniam est
          laudantium cum ducimus quo accusantium commodi veritatis consectetur esse perferendis eum!
          Voluptate voluptatum vitae quam odio officiis accusantium repudiandae cumque ipsa tenetur.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-1/4">🌞 Unleashing My Skillful Superpowers</h2>
        <div className="lg:w-2/4 flex flex-wrap gap-4">
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Front-End Development</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Back-End Development</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Responsive Design</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">UI/UX Design</span>
          <span className="bg-purple-500 bg-opacity-25 text-purple-200 px-3 py-1 rounded-full">Prototyping</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-1/4">🛠 Technical Skills</h2>
        <div className="lg:w-3/4 space-y-8">
          <div className="bg-purple-700 bg-opacity-25 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold text-purple-200">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Java</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Ruby</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">SQL</span>
            </div>
          </div>

          <div className="bg-purple-700 bg-opacity-25 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold text-purple-200">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Angular</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">React</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Ruby on Rails</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Spring Boot</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Bootstrap</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">TailwindCSS</span>
            </div>
          </div>

          <div className="bg-purple-700 bg-opacity-25 p-4 rounded-lg space-y-2">
            <h3 className="text-lg font-semibold text-purple-200">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">VS Code</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Figma</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Git</span>
              <span className="bg-purple-600 bg-opacity-40 text-purple-200 px-3 py-1 rounded-full">Jenkins</span>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <h2 className="text-xl font-bold lg:w-2/4">🌟 My Professional Experiences</h2>
        <div>
          <TimelineItem
            title="Web Development"
            description="Custom, high-performance websites that combine modern design with functionality, tailored to meet your specific needs."
            topics={['Responsive Design', 'CMS Integration', 'Custom Features', 'Performance Boost']}
            year="2021"
            company="Tech Solutions Inc."
            startYear="2019"
            endYear="2021"
          />
          <TimelineItem
            title="Web Development"
            description="Custom, high-performance websites that combine modern design with functionality, tailored to meet your specific needs."
            topics={['Responsive Design', 'CMS Integration', 'Custom Features', 'Performance Boost']}
            year="2021"
            company="Tech Solutions Inc."
            startYear="2019"
            endYear="2021"
          />
          <TimelineItem
            title="Web Development"
            description="Custom, high-performance websites that combine modern design with functionality, tailored to meet your specific needs."
            topics={['Responsive Design', 'CMS Integration', 'Custom Features', 'Performance Boost']}
            year="2021"
            company="Tech Solutions Inc."
            startYear="2019"
            endYear="2021"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
