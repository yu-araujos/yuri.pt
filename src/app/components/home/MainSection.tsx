/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Introduction from './Introduction';

const MainSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full w-full overflow-y-auto">
      <div>
        <Introduction/>
      </div>
      
      {/* Cartões de Informações */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full p-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg p-6 text-white shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="flex-grow mb-4">A Peek into My Creative Journey</p>
          <span className="text-4xl">😊</span>
        </div>
        
        {/* Card 2 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg p-6 text-white shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
          <p className="flex-grow mb-4">Top Work and Creative Projects</p>
          <span className="text-4xl">💼</span>
        </div>
        
        {/* Card 3 */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg p-6 text-white shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="flex-grow mb-4">Solutions to Meet Your Goals</p>
          <span className="text-4xl">⚙️</span>
        </div>
        
        {/* Card 4 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-6 text-white shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="flex-grow mb-4">Let's Start a Conversation</p>
          <span className="text-4xl">💬</span>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
