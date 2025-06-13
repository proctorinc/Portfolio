import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorState {
  position: CursorPosition;
  isHovering: boolean;
  isClicking: boolean;
}

export const useCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    position: { x: 0, y: 0 },
    isHovering: false,
    isClicking: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorState(prev => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    const handleMouseDown = () => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, isHovering: true }));
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, isHovering: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return cursorState;
}; 