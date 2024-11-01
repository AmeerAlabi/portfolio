'use client';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'; // Import GitHub and link icons
import Image from 'next/image';

interface Project {
  id: number;
  image: string;
  githubLink: string;
  websiteLink: string;
  tags: string[];
  title: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: '/Images/write.png',
    githubLink: 'https://github.com/AmeerAlabi',
    websiteLink: 'https://write-hub-psi.vercel.app/',
    tags: ['React', 'Javascript', 'Firebase', 'Tailwind CSS', 'Figma'],
    title: 'Write-Hub',
  },
  {
    id: 2,
    image: '/Images/weather.png',
    githubLink: 'https://github.com/AmeerAlabi',
    websiteLink: 'https://ameeralabi.github.io/weather/',
    tags: ['Html', 'API', 'Css', 'Javascript'],
    title: 'Weather-Forecast App',
  },
  {
    id: 4,
    image: '/Images/youtube.png',
    githubLink: 'https://github.com/AmeerAlabi',
    websiteLink: 'https://youtube-clone-alman.vercel.app/',
    tags: ['Javascript', 'Google Cloud', 'React', 'API'],
    title: 'VideTube',
  },
  {
    id: 5,
    image: '/Images/boom.png',
    githubLink: 'https://github.com/AmeerAlabi',
    websiteLink: 'https://landing-page-fxln.onrender.com/',
    tags: ['Javascript', 'React', 'Tailwind Css', 'Figma'],
    title: 'Boom-UI',
  },
  {
    id: 6,
    image: '/Images/glial.png',
    githubLink: 'https://github.com/AmeerAlabi',
    websiteLink: 'https://glial.vercel.app/',
    tags: ['Javascript', 'React', 'Tailwind Css', 'Figma'],
    title: 'Glial-UI',
  },
  {
    id: 7,
    image: '/Images/quiz.png',
    githubLink: 'https://github.com/AmeerAlabi',
    websiteLink: 'https://quick-quiz-lemon.vercel.app/',
    tags: ['typescript', 'Next js', 'Tailwind Css', 'Figma'],
    title: 'Quick Quiz',
  },
];

const Page = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-6 w-full font-mono bg-[#030712]">
      <h2 className="text-2xl text-white font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111827] py-12 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 duration-300"
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-60 object-cover rounded-md mb-4 transition-transform transform hover:scale-105 duration-300"
              width={320}
              height={240}
            />
            <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
            <div className="flex gap-4 mb-3">
              <button
                onClick={() => openLink(project.githubLink)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaGithub size={24} />
              </button>
              <button
                onClick={() => openLink(project.websiteLink)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLink size={24} />
              </button>
            </div>
            <div className="mt-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
