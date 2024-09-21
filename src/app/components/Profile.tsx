import React from 'react';
import Image from 'next/image';
import profile from '../images/me.png';
import Link from 'next/link';

const Profile: React.FC = () => {
  return (
    <div className="relative w-16 h-16">
      <Link href="/">
        <Image
          src={profile}
          alt="Profile"
          layout="fill" 
          className="rounded-full object-cover bg-gray-700 bg-opacity-20"
        />
      </Link>
      <span className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
    </div>
  );
};

export default Profile;
