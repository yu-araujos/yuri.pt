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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full p-6 lg:q estrah-96 h-full">
        <CardLink
          title="About me"
          description="Lorem ipsum dolor sit amet."
          emoji="🙋‍♂️"
          href="/about"
          gradient="bg-gradient-to-r from-purple-500 to-purple-700"
          ballColor="bg-purple-400"
          lineColor="bg-purple-400"
        />

        <CardLink
          title="Portfolio"
          description="Lorem ipsum dolor sit amet."
          emoji="💼"
          href="/portfolio"
          gradient="bg-gradient-to-r from-yellow-500 to-orange-400"
          ballColor="bg-orange-700"
          lineColor="bg-orange-600"
        />
        <CardLink
          title="Let's Connect"
          description="Lorem ipsum dolor sit amet."
          emoji="💬"
          href="/contact"
          gradient="bg-gradient-to-r from-green-500 to-green-700"
          ballColor="bg-green-400"
          lineColor="bg-green-300"
        />

      </div>
      <Footer />
    </div>
  );
};

export default HomeSection;
