import React from 'react';
import Link from 'next/link';

interface CardLinkProps {
  title: string;
  description: string;
  emoji: string;
  href: string;
  gradient: string;
}

const CardLink: React.FC<CardLinkProps> = ({ title, description, emoji, href, gradient }) => {
  return (
    <Link href={href} className={`block ${gradient} rounded-lg p-6 text-white shadow-lg flex items-center justify-between hover:scale-105 transition-transform`}>
       <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="flex-grow mb-4">{description}</p>
       </div>
        <span className="text-4xl">{emoji}</span>
    </Link>
  );
};

export default CardLink;
