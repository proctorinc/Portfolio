import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-white/20 z-50 origin-left"
      style={{ scaleX }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-accent-light"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default ScrollProgress; 