/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from '../footer';
import PortfolioIntro from './PortfolioIntro';
import PortfolioContent from './PortfolioContent';

const PortfolioSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full w-full overflow-y-auto">
      <div className='w-full'>
        <PortfolioIntro />
      </div>
      <div className="p-6  bg-black bg-opacity-30">
        <PortfolioContent/>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioSection;
