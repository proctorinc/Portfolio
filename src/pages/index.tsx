import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ResumeModal } from '../components/ResumeModal';
import { ProjectCard } from '../components/ProjectCard';
import { SubProjectCard } from '../components/SubProjectCard';

const HomePage: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300"
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
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/proctorinc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:text-white hover:bg-transparent dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matthew-proctor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:text-white hover:bg-transparent dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <button
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-gray-800 dark:text-white hover:text-white hover:bg-transparent dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex items-center gap-2"
              onClick={() => setIsResumeOpen(true)}
            >
              <FaFileAlt className="w-5 h-5" />
              Resume
            </button>
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

      {/* Skills Section */}
      {/* <section id="skills" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "TypeScript", "JavaScript", "Python", "Golang", "Java", "Groovy", "C++", "C", "SH/BSH/ZSH",
                  "React", "Next.js", "Vite", "React Query", "React Native", "jQuery", "Tailwind CSS",
                  "REST", "GraphQL", "gin-gonic", "gqlgen", "Socket.IO", "Express.js", "Spring Boot", "tRPC", "Firebase", "Django"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Databases & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "MySQL", "PostgreSQL", "SQLite", "Turso", "Prisma", "Firestore", "MongoDB Atlas", "PlanetScale", "JDBC",
                  "AWS S3", "Google Cloud Run", "Jira", "Zendesk", "Jest", "Storybook", "Vercel", "NextAuth",
                  "GitHub", "GitLab", "SSO", "SAML", "LaunchDarkly", "Windows AD", "Docker", "Orchestrator", "Figma"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-none md:col-span-2"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Security Tools</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Burp Suite", "Metasploit", "ZAP", "Nmap", "Wireshark", "DirBuster", "Autopsy", "Foxy Proxy", "HashCat"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

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
              description="An in production daily drawing social media app with password-less authentication and real-time features."
              technologies={["Golang", "gin-gonic", "React", "Vite", "TypeScript", "TailwindCSS", "Google Cloud Run", "AWS S3", "Turso", "SQLite", "Docker"]}
              link="https://github.com/proctorinc/daily-drawing"
              liveLink="https://drawer-1084176098994.us-west1.run.app/app"
              imageUrl='/images/daily-doodle-1.png'
            />
            <ProjectCard
              title="Golang Financial GraphQL API"
              description="A secure GraphQL API for financial data with OFX file parsing and JWT authentication."
              technologies={["Golang", "gin-gonic", "sqlc", "gqlgen", "dataloaden", "go-jwt"]}
              link="https://github.com/proctorinc/Banker-API"
              imageUrl="/images/banker.png"
            />
            <ProjectCard
              title="Vulnerability Bug-fixing Command Line Tool"
              description="An internal Secure Code Warrior tool that reduced bug fix time by 75% through automation of complex workflows."
              technologies={["Python", "GitPython", "Beautiful Soup", "Jira API", "keyring"]}
              link="https://github.com/proctorinc/bugfixpy"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
            Other Things I'm Working on
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SubProjectCard
              title="Online Scrabble"
              description="Scrabble powered by a REST state machine back-end with live user chat, dictionary, and valid move checking."
              technologies={["Golang", "React", "TypeScript", "AWS S3"]}
              link="https://github.com/proctorinc/Scrabble"
              imageUrl="/images/scrabble.png"
            />
            <SubProjectCard
              title="Dynamic API Mapper"
              description="A front-end application that manages API connections and gives a visual UI to map and modify API response data to datasheet columns for easy report automation."
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              link="https://github.com/proctorinc/DynamicAnalyzer"
              imageUrl='/images/dynamic-analyzer.png'
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
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
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
          <div className="flex justify-between items-start">
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
