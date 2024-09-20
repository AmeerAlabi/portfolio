import Image from 'next/image';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id='hero' className='min-h-[90vh] md:min-h-[500px] p-6 md:p-12 flex flex-col md:flex-row bg-[#030712] w-full'>
      {/* Image Section */}
      <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
        <div className="relative h-[250px] w-[220px] md:h-[360px] md:w-[320px] lg:h-[400px] lg:w-[350px]">
          <Image
            src='/Images/heros.png'
            alt='hero'
            className='absolute z-10 h-full w-full border-[#030712]'
            style={{ objectFit: 'cover' }}
            width={320}
            height={360}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center max-w-lg md:max-w-3xl flex-grow gap-6 md:gap-8 lg:gap-12 md:order-first md:items-start md:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-mono md:text-5xl lg:text-6xl font-bold text-white">
            Hi, I&apos;m Ameer{' '}
            <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-[10px] font-mono text-white">
            I&apos;m a front-end developer with expertise in React, React Native, and Tailwind CSS, dedicated to crafting sleek, responsive digital experiences. With a year in tech, I&apos;m passionate about building intuitive, visually appealing web applications and continuously improving my skills.
          </p>
        </div>
        
        {/* Location and Socials */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-white text-xl md:text-2xl" />
            <h1 className='text-base md:text-lg lg:text-xl font-mono text-white'>Lagos, Nigeria</h1>
          </div>
          <div className="flex mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/ameer-alabi-9bb852287/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl md:text-3xl hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://x.com/Alman_0401" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl md:text-3xl hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:ameeralabi7@gmail.com">
              <FaEnvelope className="text-white text-2xl md:text-3xl hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://github.com/AmeerAlabi" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl md:text-3xl hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
