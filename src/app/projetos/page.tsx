import React from 'react';
import Image from 'next/image'
import dev from '../images/icons/dev.svg'
import design from '../images/icons/design.svg'
import '../css/projects.css';
import Widget from '@/app/components/home/widget';
import Menu from '../components/menu';



const Projects = () => {
  return (
    <div className='projects h-screen'>
      <div><Menu/></div>
      <h1 className='text-7xl uppercase font-semibold text-center text-[#B790DB] pt-24'>Projetos</h1>
      <div className='flex justify-center gap-10 mt-24'>
        <Widget width={500} height={240} className='bg-[#163B5F] gap-5'>
          <Image 
          src={dev}
          alt="Programação - ícone"
          width={36}
          height={36}/>
          <span className='text-[#F0F8FF] text-3xl font-medium'>Programação</span>
        </Widget>
        <Widget width={500} height={240} className='bg-[#9776BA] gap-5'>
        <Image 
          src={design}
          alt="Programação - ícone"
          width={36}
          height={36}/>
          <span className='text-[#F0F8FF] text-3xl font-medium'>Design</span>
        </Widget>
      </div>
    </div>
  );
};

export default Projects;
