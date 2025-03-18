// Onediv.jsx
import React from 'react';
import useCarousel from './Stote'; // Import the custom hook

function Onediv() {
  // 10 distinct images of beautiful wooden houses from Unsplash
  const images = [
    'https://picsum.photos/id/10/200/200',
    'https://picsum.photos/id/20/200/200',
    'https://picsum.photos/id/30/200/200',
    'https://picsum.photos/id/40/200/200',
    'https://picsum.photos/id/50/200/200',
    'https://picsum.photos/id/60/200/200',
    'https://picsum.photos/id/70/200/200',
    'https://picsum.photos/id/80/200/200',
    'https://picsum.photos/id/90/200/200',
    'https://picsum.photos/id/100/200/200',
  ];
  const { offset, containerRef } = useCarousel(images.length);

  return (
    <div className="w-full max-w-[1200px] mx-auto my-0 bg-white rounded-[10px] border border-[#e1e1e1] shadow-[2px_2px_20px_rgba(0,0,0,0.1)] p-0 animate-[fadeIn_1s_ease-out]">
      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Wooden House ${index + 1}`}
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]
               object-cover rounded-full border-2 p-1 mx-1 border-[red] hover:scale-105 transition-transform
                duration-300 ease-in-out flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Onediv;