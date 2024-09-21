/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Introduction from './Introduction';
import Footer from '../footer';
import CardLink from './CardLink';

const HomeSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full w-full overflow-y-auto">
      <div>
        <Introduction />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full p-6 lg:q estrah-96">
        <CardLink
          title="About me"
          description="Lorem ipsum dolor sit amet."
          emoji="😊"
          href="/about"
          gradient="bg-gradient-to-r from-purple-500 to-purple-800"
        />

        <CardLink
          title="Portfolio"
          description="Lorem ipsum dolor sit amet."
          emoji="💼"
          href="/portfolio"
          gradient="bg-gradient-to-r from-yellow-500 to-orange-400"
        />

        <CardLink
          title="Contact"
          description="Lorem ipsum dolor sit amet."
          emoji="💬"
          href="/contact"
          gradient="bg-gradient-to-r from-green-400 to-green-600"
        />

        <CardLink
          title="Soon"
          emoji="👀"
          href="/"
          gradient="bg-gradient-to-r from-blue-500 to-blue-600"
        />


      </div>
      <Footer />
    </div>
  );
};

export default HomeSection;
