// Onediv.jsx
import React from 'react';
import useCarousel from './Stote';

function Onediv() {
  // تصاویر مرتبط با خانه‌های چوبی از Unsplash با کیفیت و سایز مناسب
  const images = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop', // خانه چوبی مدرن
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop', // کلبه چوبی
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=200&h=200&fit=crop', // ویلا چوبی
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=200&h=200&fit=crop', // خانه روستایی چوبی
    'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=200&h=200&fit=crop', // خانه جنگلی چوبی
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=200&h=200&fit=crop', // کلبه کوهستانی
    'https://images.unsplash.com/photo-1600566752227-8f3b9a6f9323?w=200&h=200&fit=crop', // خانه ساحلی چوبی
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=200&fit=crop', // کلبه اسکاندیناوی
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=200&h=200&fit=crop', // خانه مینیمال چوبی
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=200&h=200&fit=crop'  // کلبه سنتی
  ];

  const { offset, containerRef } = useCarousel(images.length);

  return (
    <div className="w-full max-w-[1200px] mx-auto my-8 bg-white rounded-xl border border-gray-200 shadow-lg p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">خانه‌های چوبی نمونه</h2>
      <p className="text-center text-gray-600 mb-6">مجموعه‌ای از زیباترین طراحی‌های خانه‌های چوبی</p>
      
      <div className="w-full overflow-hidden relative">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out py-4"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="px-2 flex-shrink-0 group">
              <img
                src={src}
                alt={`خانه چوبی نمونه ${index + 1}`}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40
                 object-cover rounded-lg border-2 border-red-100 
                 group-hover:border-red-300 transition-all duration-300
                 shadow-md group-hover:shadow-lg flex-shrink-0"
                loading="lazy"
              />
              <p className="text-center mt-2 text-sm text-gray-700">خانه چوبی {index + 1}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {images.slice(0, 3).map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-gray-300'}`}
            aria-label={`اسلاید ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Onediv;