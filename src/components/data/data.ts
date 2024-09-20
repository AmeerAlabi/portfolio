

interface Project {
    id: number;
    image: string;
    githubLink: string;
    websiteLink: string;
    tags: string[]; 
  }
  

const projects: Project[] = [
    {
      id: 1,
      image: '/path/to/image1.jpg',
      githubLink: 'https://github.com/username/project1',
      websiteLink: 'https://project1.com',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      image: '/path/to/image2.jpg',
      githubLink: 'https://github.com/username/project2',
      websiteLink: 'https://project2.com',
      tags: ['Node.js', 'Express', 'MongoDB'],
    },

  ];
  