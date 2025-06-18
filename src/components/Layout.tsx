import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import ThemeToggle from './ThemeToggle';
import { pageVariants } from '../hooks/usePageTransition';
import Background from './BackgroundBlobs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      <Background />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-foreground dark:text-white text-2xl font-bold gradient-text">
            MP
          </h1>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-foreground hover:scale-105 transition-all duration-300">
              Home
            </Link>
            <Link to="#about" className="text-foreground hover:text-foreground transition-colors hover:scale-110">
              About
            </Link>
            <Link to="#projects" className="text-foreground hover:text-foreground transition-colors hover:scale-110">
              Projects
            </Link>
            <Link to="#contact" className="text-foreground hover:text-foreground transition-colors hover:scale-110">
              Contact
            </Link>
          </div>
          <ThemeToggle />

          {/* <div className="md:hidden">
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
          </div> */}
        </nav>
      <ScrollProgress />

      </header>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-8 text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Matt Proctor</p>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};

export default Layout; 