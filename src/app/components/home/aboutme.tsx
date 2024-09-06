import Image from 'next/image'
import profilePic from '../../images/me.webp'
import linkedin from '../../images/icons/linkedin.svg'
import github from '../../images/icons/github.svg'
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div>
      <div className='flex items-center justify-between gap-10 '>
        <Image
        src={profilePic}
        alt="Yuri Silva - Foto"
        width={75}
        height={75}
        placeholder="blur"
        className='rounded-lg'
        />
        <h2 className='text-4xl font-medium text-[#66B3FF]'>Yuri Silva</h2>
      </div>
      <div className='socials flex gap-10 justify-center items-end pt-8 mt-8 border-t-2 border-[#F0F8FF]'>
      <Link href="https://www.linkedin.com/in/yuriaraujoo/" target='_blank'>
        <Image
          src={linkedin}
          alt="Linkedin - Icone"
          width={36}
          height={36}/>
      </Link>
      <Link href="https://github.com/yu-araujos" target='_blank'>
        <Image
          src={github}
          alt="GitHub - Icone"
          width={36}
          height={36}/>
      </Link>
      </div>
    </div>
  );
}