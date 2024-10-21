'use client'; // Ensure this is in client-side code

import { useEffect, useState } from 'react';

interface InnertWindow {
  width: number;
  height: number;
}

const getWindowDimensions = (): InnertWindow => {
  if (typeof window === 'undefined') {
    // If the window is undefined, return default values for SSR
    return {
      width: 0,
      height: 0,
    };
  }
  const { innerWidth, innerHeight } = window;
  return {
    width: innerWidth,
    height: innerHeight,
  };
};

const useWindowDimensions = (): InnertWindow => {
  const [windowDimensions, setWindowDimensions] = useState<InnertWindow>(
    getWindowDimensions()
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = (): void => {
        setWindowDimensions(getWindowDimensions());
      };
      
      // Set the initial dimensions on mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on unmount
      return (): void => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
