import React from 'react';
import TopBar from './TopBar';

interface ContainerProps {
  children: React.ReactNode;
  gradient: string;
}

const MainContainer: React.FC<ContainerProps> = ({ children, gradient }) => {
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen bg-gradient-to-br ${gradient} p-4`}>
      <TopBar />
      <div className="w-11/12 bg-black bg-opacity-60 rounded-b-xl shadow-lg h-[80vh]">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
