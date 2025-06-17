import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      {/* Base dark background */}
      {/* <div className="absolute inset-0 bg-blue-800" /> */}
      
      {/* Radial gradient overlay with animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400/50 via-slate-400/30 to-white dark:from-white/20 dark:via-gray-950 dark:to-black animate-gradient-shift" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-600/40 via-slate-400/30 to-white dark:from-white/20 dark:via-gray-950 dark:to-black animate-gradient-shift-2" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
};

export default Background; 