import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between  w-full md:w-11/12 px-4 py-2 bg-black bg-opacity-80 rounded-t-xl border-b-[1px] border-opacity-90 border-gray-700">
      <div className="flex space-x-2">
        <span className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></span>
      </div>
      <p className="flex-grow text-center text-gray-500">Yuri Silva</p>
    </div>
  );
};

export default TopBar;
