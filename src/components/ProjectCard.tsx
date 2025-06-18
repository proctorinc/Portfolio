import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  liveLink?: string;
  imageUrl?: string;
  learnings?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
  liveLink,
  imageUrl,
  learnings,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col sm:flex-row items-center border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none"
    >
      <div className="flex flex-col w-full pr-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-none"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 mb-6 p-4 bg-white/20 dark:bg-white/10 rounded-xl text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-none">
          <h3 className='pb-2'>Key learning takeaways:</h3>
          {learnings?.map((sentence, index) => (
            <li key={index}>
              {sentence}
            </li>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            View Code →
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
      {imageUrl && (
        <div className="order-first pb-6 sm:pb-0 sm:order-last flex justify-center sm:w-1/2">
          <img src={imageUrl} className='rounded-lg max-h-[450px]' />
        </div>
      )}
    </motion.div>
  );
};