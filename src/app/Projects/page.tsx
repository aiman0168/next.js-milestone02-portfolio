import React from 'react';

const projects = [
  {
    title: 'Stop Watch App',
    url: 'https://30days-of-30projects-25-stop-watch-app.vercel.app/',
  },
  {
    title: 'Word Counter App',
    url: 'https://30days-of-30projects-22-word-counter-app.vercel.app/',
  },
  {
    title: 'Notes App',
    url: 'https://30days-of-30projects-20-notes-app.vercel.app/',
  },
  {
    title: 'Github Profile Viewer App',
    url: 'https://30days-of-30projects-19-git-hub-profile-viewer-app.vercel.app/?vercelToolbarCode=-X5PGloKUrAUrl5',
  },
  {
    title: 'Currency Converter',
    url: 'https://30days-of-30projects-18-currency-converter.vercel.app/',
  },
  {
    title: 'Movie Searcher App',
    url: 'https://30days-of-30projects-16-movie-searching-app.vercel.app/',
  },
  {
    title: 'Snake Game',
    url: 'https://30days-of-30projects-26-snake-game-app.vercel.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="max-w-full mx-auto p-6 bg-white shadow-lg text-center">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">My Projects</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center text-gray-600 mt-8">
        Visit my <a href="https://github.com/aiman0168" target="_blank" className="text-blue-600 hover:text-blue-800">GitHub</a> or <a href="https://www.linkedin.com/in/umm-e-aiman-26a05824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-blue-600 hover:text-blue-800">LinkedIn</a> to view more projects...
      </p>
    </section>
  );
};

export default Projects;