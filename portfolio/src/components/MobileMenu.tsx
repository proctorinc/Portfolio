import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { to: '/#about', label: 'About' },
    { to: '/#experience', label: 'Experience' },
    { to: '/#projects', label: 'Projects' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-black/90 backdrop-blur-lg border-l border-white/10 z-50"
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <button
                onClick={onClose}
                className="p-4 self-end text-gray-400 hover:text-white transition-colors duration-200"
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

              {/* Menu items */}
              <nav className="flex-1 px-4 py-8">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={item.to}
                        onClick={onClose}
                        className="text-xl text-gray-300 hover:text-white transition-colors duration-200 block py-2"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social links */}
              <div className="p-4 border-t border-white/10">
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/proctorinc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/matthew-proctor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 