'use client';

import { useEffect } from 'react';

export const useViewportHeight = () => {
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(
        '--viewport-height',
        `${vh}px`,
      );
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
};
