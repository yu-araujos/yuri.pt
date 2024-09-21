/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from '../footer';
import AboutIntro from './AboutIntro';
import AboutContent from './AboutContent';

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full w-full overflow-y-auto">
      <div className='w-full'>
        <AboutIntro />
      </div>
      <div className="p-6">
       <AboutContent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutSection;
