import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Matt Proctor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Full Stack Developer & Security Specialist
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/proctorinc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matthew-proctor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDownIcon className="h-8 w-8 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a technical support engineer with experience in software development, troubleshooting technical bugs, and
              working in code every day. With over 3 years of experience in technical support and software development, I have
              used my passion for troubleshooting in my work. From vulnerability remediation in full-stack web application code to
              providing tier 3 support for a SaaS application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Experience
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Technical Support Engineer / Software Developer"
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
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Full-stack Daily Drawing App"
              description="A production-ready drawing application with password-less authentication and real-time features."
              technologies={["Golang", "React", "TypeScript", "AWS S3"]}
              link="https://github.com/proctorinc/daily-drawing"
            />
            <ProjectCard
              title="Golang Financial GraphQL API"
              description="A secure GraphQL API for financial data with OFX file parsing and JWT authentication."
              technologies={["Golang", "GraphQL", "JWT", "NLP"]}
              link="https://github.com/proctorinc/banker-api"
            />
            <ProjectCard
              title="Process Efficiency Command Line Tool"
              description="An internal tool that reduced bug fix time by 75% through automation of complex workflows."
              technologies={["Python", "GitPython", "Jira API"]}
              link="https://github.com/proctorinc/bugfixpy"
            />
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
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:matthewalanproctor@gmail.com"
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-all duration-300"
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-300">{company}</p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
        <p className="text-gray-400 text-sm">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </motion.div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col"
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition-colors duration-200"
      >
        View Project →
      </a>
    </motion.div>
  );
};

export default HomePage;
