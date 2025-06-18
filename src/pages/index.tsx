import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ProjectCard } from '../components/ProjectCard';
import { SubProjectCard } from '../components/SubProjectCard';
import M from 'minimatch';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="w-full md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300"
          >
            Matt Proctor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          >
            Security-minded Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
          >
            <a
              href="https://github.com/proctorinc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:text-white hover:bg-transparent dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center gap-2 w-fit"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matthew-proctor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:text-white hover:bg-transparent dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center gap-2 w-fit"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/files/Resume.pdf"
              download
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:text-white hover:bg-transparent dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center gap-2 w-fit"
            >
              <FaFileAlt className="w-5 h-5" />
              Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute flex bottom-8 w-full justify-center"
        >
          <ArrowDownIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: "50%" }}
            whileInView={{ 
              opacity: 1, 
              scale: "100%",
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center pb-10 perspective-1000"
          >
            <motion.img 
              src="/images/profile-pic.png" 
              className="w-full opacity-80 max-w-[300px] transform-gpu"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none hover:backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-8">
              I'm a technical support engineer with over 3 years experience in software development, troubleshooting technical bugs in SaaS applications, and
              writing code in 65+ different languages and frameworks each day. From vulnerability remediation in full-stack web application code to developing production features in TypeScript React front-ends, I've grown a passion for writing quality and secure code. I've found a love hard technical challenges and seeking to learn and grow every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
            Experience
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Technical Support Engineer"
              company="Secure Code Warrior"
              period="September 2021 - Present"
              location="Portland, OR"
              achievements={[
                "Developed new production features in a React TypeScript front-end with a Java Spring back-end",
                "Implemented localization with 8 supported languages for a production admin dashboard",
                "Resolved 700+ security-related bugs in security training web application code",
                "Wrote a bug-fixing script that improved average fix time by 75%",
                "Reduced user reported code issues by 50%"
              ]}
            />
            <ExperienceCard
              title="Information Security Analyst Intern"
              company="Swan Island Networks"
              period="May 2021 - June 2021"
              location="Portland, OR"
              achievements={[
                "Conducted extensive research on vulnerability categories",
                "Promoted developer secure coding guidelines based on OWASP top 10",
                "Collaborated with InfraGuard to build alerting RSS streams"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col gap-20 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-8">
            <ProjectCard
              title="Full-stack Daily Drawing App"
              description="My first production daily drawing app with multiple daily users. Uses password-less authentication and real-time features."
              technologies={["Golang", "gin-gonic", "React", "Vite", "TypeScript", "TailwindCSS", "Google Cloud Run", "AWS S3", "Turso", "SQLite", "Docker"]}
              link="https://github.com/proctorinc/drawer"
              liveLink="https://drawer-1084176098994.us-west1.run.app/app"
              imageUrl='/images/daily-doodle-1.png'
              learnings={[
                "First production deployment and CI/CD setup with daily active users",
                "Hosting images in AWS S3 bucket and handling bucket permissions",
                "Using migrations to make realtime feature updates without user downtime",
                "Learned to rely on comprehensive error logging to troubleshoot and fix bugs",
              ]}
            />
            <ProjectCard
              title="Golang Financial GraphQL API"
              description="A secure GraphQL API for financial data with OFX file parsing and JWT authentication."
              technologies={["Golang", "gin-gonic", "sqlc", "gqlgen", "dataloaden", "go-jwt"]}
              link="https://github.com/proctorinc/Banker-API"
              imageUrl="/images/banker.png"
              learnings={[
                "Deepening my knowledge with GraphQL and the strengths and weaknesses",
                "Using dataloaders to handle N+1 problem with nested GraphQL queries",
                "Managing server resources and and query limits to balance performance and efficiency",
                "Programming APIs to be front-end friendly and reusable"
              ]}
            />
            <ProjectCard
              title="Open Source Vulnerability Fixing Command Line Tool"
              description="An internal Secure Code Warrior tool that reduced bug fix time by 75% through automation of complex workflows."
              technologies={["Python", "GitPython", "Beautiful Soup", "Jira API", "keyring"]}
              link="https://github.com/proctorinc/bugfixpy"
              imageUrl='/images/bugfixpy-1.png'
              learnings={[
                "Finding ways to improve the speed of processes and push the boundaries of my job",
                "Maintaining an application used across my company by multiple teams",
                "Handling feedback and creating updates to fix errors and implement suggested improvements",
                "Designing authentication methods for multiple APIs to provide secure open-source tool",
              ]}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
            Other Things I'm Working on
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <SubProjectCard
                title="Online Scrabble"
                description="Scrabble powered by a REST state machine back-end with live user chat, dictionary, and valid move checking."
                technologies={["React", "TypeScript", "react-dnd", "headless-ui",  "Golang", "gin-gonic", "websockets"]}
                link="https://github.com/proctorinc/Scrabble"
                imageUrl="/images/scrabble.png"
              />
              <SubProjectCard
                title="UI Recreation of Crumbl Cookie"
                description="Learning and testing CSS and UI skills by recreating a popular website"
                technologies={["Angular", "Styled Components", "CSS"]}
                link="https://github.com/proctorinc/Crumbl"
                imageUrl="/images/crumbl-preview.png"
              />
              {/* <SubProjectCard
                title="Security Saas Mockup"
                // description="Scrabble powered by a REST state machine back-end with live user chat, dictionary, and valid move checking."
                technologies={["React", "TypeScript", "react-dnd", "headless-ui",  "Golang", "gin-gonic", "websockets"]}
                link="https://github.com/proctorinc/Scrabble"
                imageUrl="/images/cyber-guard-preview.png"
              /> */}
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <SubProjectCard
                title="Dynamic API Mapper"
                description="A front-end application that manages API connections and gives a visual UI to map API response data to datasheets for easy report automation."
                technologies={["React", "TypeScript", "Tailwind CSS"]}
                link="https://github.com/proctorinc/DynamicAnalyzer"
                imageUrl='/images/dynamic-analyzer.png'
              />
              <SubProjectCard
                title="Crossword + Minesweeper Game"
                description="State machine REST API backend powered game with a fun concept."
                technologies={["React", "TypeScript", "react-dnd", "headless-ui",  "Golang", "gin-gonic", "websockets"]}
                link="https://github.com/proctorinc/CrossSweeper"
                imageUrl="/images/cross-sweeper-1.png"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <SubProjectCard
                title="Live Chatroom + Video calling"
                description="A live websocket-based chatroom and video calling app with Zoom-like functionality."
                technologies={["React", "TypeScript", "Express JS", "Mongo DB", "socket-io", "WebRTC"]}
                link="https://github.com/proctorinc/LiveApp"
                imageUrl='/images/live-app-1.png'
              />
              <SubProjectCard
                title="Dev and UI Webtools"
                description="A collection of useful dev and UI tools that I often use everyday in one dashboard"
                technologies={["React", "TypeScript", "MUI components"]}
                link="https://github.com/proctorinc/WebTools"
                imageUrl='/images/webtools-preview.png'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
              Get in Touch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:matthewalanproctor@gmail.com"
              className="inline-block px-6 py-3 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  achievements,
}) => {
  const getCompanyLogo = (companyName: string) => {
    switch (companyName.toLowerCase()) {
      case 'secure code warrior':
        return '/images/scw-logo.png';
      case 'swan island networks':
        return '/images/sin-logo.jpeg';
      default:
        return null;
    }
  };

  const logoPath = getCompanyLogo(company);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none"
    >
      <div className="flex items-start gap-4 mb-4">
        {logoPath && (
          <div className="w-20 h-20 relative flex-shrink-0">
            <img
              src={logoPath}
              alt={`${company} logo`}
              className="rounded-full w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div>
              <p className="text-gray-700 dark:text-gray-300">{company}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{location}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{period}</p>
          </div>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default HomePage;
