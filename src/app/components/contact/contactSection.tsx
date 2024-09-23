/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from '../footer';
import ContactIntro from './ContactIntro';
import ContactContent from './ContactContent';

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full w-full overflow-y-auto">
      <div className='w-full'>
        <ContactIntro/>
      </div>
      <div className="w-full">
        <ContactContent/>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
