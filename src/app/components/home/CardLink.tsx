import React from 'react';
import Link from 'next/link';


interface CardLinkProps {
  title: string;
  description?: string;
  emoji: string;
  href: string;
  gradient: string;
  lineColor: string;
  ballColor: string;
}

const CardLink: React.FC<CardLinkProps> = ({ title, description, emoji, href, gradient, lineColor, ballColor }) => {
  return (
    <Link href={href}>
      <div className={`relative ${gradient} rounded-lg p-6 text-white shadow-lg flex items-center justify-between hover:scale-105 transition-transform overflow-hidden`}>
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${ballColor} opacity-10 rounded-full z-0`}></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl">{title}</h3>
          <p className={`text-sm mt-1`}>{description}</p>
        </div>

        <div className="relative z-10 mt-8">
          <span className="text-5xl">{emoji}</span>
        </div>

        <div className={`absolute bottom-0 left-0 w-full h-1 ${lineColor}`}></div>
      </div>
    </Link>
  );
};

export default CardLink;
