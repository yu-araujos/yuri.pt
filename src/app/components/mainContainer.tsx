import React from 'react';
import TopBar from './TopBar';

interface ContainerProps {
  children: React.ReactNode;
  gradient: string;
}

const MainContainer: React.FC<ContainerProps> = ({ children, gradient }) => {
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-br ${gradient} p-4`}>
      <TopBar />
      <div className="flex flex-grow justify-center items-center w-full md:w-11/12 bg-black bg-opacity-60 lg:h-[70vh]">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
