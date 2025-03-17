// useCarousel.js
import { useState, useEffect, useRef } from 'react';

function useCarousel(imageCount) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  // Effect to slide images to the right every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const screenWidth = window.innerWidth;
        const imageWidth = screenWidth < 640 ? 100 : screenWidth < 768 ? 150 : 200; // Responsive image width
        return prevOffset - imageWidth;
      });
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Effect to reposition images exiting the left side
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const screenWidth = window.innerWidth;
    const imageWidth = screenWidth < 640 ? 100 : screenWidth < 768 ? 150 : 200; // Responsive image width
    if (Math.abs(offset) >= imageWidth) {
      setOffset((prevOffset) => prevOffset + imageWidth); // Shift back by one image width
      container.appendChild(container.firstChild); // Move the first image to the end
    }
  }, [offset]);

  return { offset, containerRef };
}

export default useCarousel;