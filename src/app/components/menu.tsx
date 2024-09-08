import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../images/me.webp'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'; 

const Menu: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 ">
      <div className="flex items-center">
        <Image
          src={profilePic}
          alt="Yuri Silva"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="ml-3 text-xl font-semibold text-[#B790DB]">Yuri Silva</span>
      </div>

      <nav className="flex items-center gap-7 font-medium text-[#B790DB]">
        <Link href="/" className="flex items-center">
          <ArrowLeftCircleIcon className="h-5 w-5 text-[#B790DB] mr-2 f" />
          Início
        </Link>
        <Link href="/sobre-mim" >
          Sobre Mim
        </Link>
        <Link href="/conectar">
          Vamos nos conectar!
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
