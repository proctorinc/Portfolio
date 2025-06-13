import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const CustomCursor: React.FC = () => {
  const { position, isHovering, isClicking } = useCursor();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-50"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default CustomCursor; 