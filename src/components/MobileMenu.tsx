import React from 'react';
import { Link } from 'gatsby';
import ThemeToggle from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className="flex items-center space-x-4">
      <ThemeToggle />
      <button
        onClick={() => onClose()}
        className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-md text-foreground hover:text-primary transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              to="/"
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 