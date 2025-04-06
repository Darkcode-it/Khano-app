// // Articles.jsx
// import React, { useState } from 'react';
// import { FaRegHeart, FaHeart, FaRulerCombined } from 'react-icons/fa';
// import { MdOutlineBedroomParent, MdOutlineBathroom } from 'react-icons/md';
// import useArticles from './Article.js';

// const PropertyCard = ({ property, isFavorite, onToggleFavorite }) => {
//   return (
//     <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
//       <div className="relative overflow-hidden flex-grow-0">
//         <img
//           className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
//           src={property.image}
//           alt={property.title}
//           loading="lazy"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = '/placeholder-house.jpg';
//           }}
//         />
//         <button
//           onClick={() => onToggleFavorite(property.id)}
//           className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
//           aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
//         >
//           {isFavorite ? (
//             <FaHeart className="text-red-500 text-xl" />
//           ) : (
//             <FaRegHeart className="text-[#7065f0] text-xl" />
//           )}
//         </button>
//       </div>

//       <div className="p-4 flex-grow flex flex-col">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-lg font-bold text-gray-800 truncate">
//             {property.title}
//           </h3>
//           <span className="text-lg font-semibold text-[#7065f0] bg-[#7065f0]/10 px-2 py-1 rounded-md">
//             {property.price}
//           </span>
//         </div>

//         <p className="text-gray-600 text-sm mb-3 flex items-center">
//           <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 0C7.6 0 4 3.6 4 8c0 4.1 4.6 9.6 8 12.9 3.4-3.3 8-8.8 8-12.9 0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
//           </svg>
//           <span className="truncate">{property.address}</span>
//         </p>

//         <div className="flex justify-between border-t border-gray-100 pt-3 mt-auto">
//           <div className="flex flex-col items-center px-1">
//             <MdOutlineBedroomParent className="text-[#7065f0] text-xl" />
//             <span className="text-xs text-gray-600 mt-1">
//               {property.beds} خواب
//             </span>
//           </div>
//           <div className="flex flex-col items-center px-1">
//             <MdOutlineBathroom className="text-[#7065f0] text-xl" />
//             <span className="text-xs text-gray-600 mt-1">
//               {property.baths} حمام
//             </span>
//           </div>
//           <div className="flex flex-col items-center px-1">
//             <FaRulerCombined className="text-[#7065f0] text-xl" />
//             <span className="text-xs text-gray-600 mt-1">
//               {property.size}
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default function Articles() {
//   const { articles, isLoading, error } = useArticles();
//   const [favorites, setFavorites] = useState([]);

//   const handleToggleFavorite = (id) => {
//     setFavorites(prev => 
//       prev.includes(id) 
//         ? prev.filter(item => item !== id) 
//         : [...prev, id]
//     );
//   };

//   if (isLoading) return (
//     <div className="text-center py-12">
//       <div className="animate-spin inline-block w-8 h-8 border-4 border-[#7065f0] rounded-full border-t-transparent"></div>
//       <p className="mt-4 text-gray-600">در حال بارگذاری املاک...</p>
//     </div>
//   );

//   if (error) return (
//     <div className="text-center py-12 text-red-500">
//       <p>خطا در دریافت اطلاعات!</p>
//       <p className="text-sm mt-2">{error.message}</p>
//     </div>
//   );

//   return (
//     <section className="container mx-auto px-4 py-8">
//       <header className="text-center mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">املاک منتخب</h2>
//         <p className="text-gray-600 max-w-xl mx-auto">بهترین انتخاب‌ها برای زندگی ایده‌آل شما</p>
//       </header>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {articles.map((article) => (
//           <PropertyCard
//             key={article.id}
//             property={article}
//             isFavorite={favorites.includes(article.id)}
//             onToggleFavorite={handleToggleFavorite}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaRulerCombined } from 'react-icons/fa';
import { MdOutlineBedroomParent, MdOutlineBathroom } from 'react-icons/md';
import useArticles from './Article.js';

const PropertyCard = ({ property, isFavorite, onToggleFavorite }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden flex-grow-0">
        <img
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          src={property.image}
          alt={property.title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder-house.jpg';
          }}
        />
        <button
          onClick={() => onToggleFavorite(property.id)}
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
          aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-[#7065f0] text-xl" />
          )}
        </button>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {property.title}
          </h3>
          <span className="text-lg font-semibold text-[#7065f0] bg-[#7065f0]/10 px-2 py-1 rounded-md">
            {property.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C7.6 0 4 3.6 4 8c0 4.1 4.6 9.6 8 12.9 3.4-3.3 8-8.8 8-12.9 0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
          </svg>
          <span className="truncate">{property.address}</span>
        </p>

        <div className="flex justify-between border-t border-gray-100 pt-3 mt-auto">
          <div className="flex flex-col items-center px-1">
            <MdOutlineBedroomParent className="text-[#7065f0] text-xl" />
            <span className="text-xs text-gray-600 mt-1">
              {property.beds} خواب
            </span>
          </div>
          <div className="flex flex-col items-center px-1">
            <MdOutlineBathroom className="text-[#7065f0] text-xl" />
            <span className="text-xs text-gray-600 mt-1">
              {property.baths} حمام
            </span>
          </div>
          <div className="flex flex-col items-center px-1">
            <FaRulerCombined className="text-[#7065f0] text-xl" />
            <span className="text-xs text-gray-600 mt-1">
              {property.size}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const PriceFilter = ({ onFilter, onClear }) => {
  const [price, setPrice] = useState('');

  const handleFilter = () => {
    const numericValue = parseInt(price.replace(/,/g, ''), 10);
    if (!isNaN(numericValue)) {
      onFilter(numericValue);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4">
      <div className="bg-gradient-to-r from-[#100A55] to-[#241D7E] text-white p-8 rounded-2xl shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">فیلتر قیمت</h1>
            <p className="text-base text-[#9EA3AE] leading-relaxed">
              حداکثر قیمت مورد نظر خود را وارد کنید
            </p>
          </div>

          <div className="mb-8">
            <div className="relative w-full max-w-md mx-auto">
              <input
                className="w-full h-12 px-4 text-center rounded-lg border border-gray-300 bg-white text-gray-800 focus:border-[#7065F0] focus:ring-2 focus:ring-[#7065F0]/20 outline-none transition-all duration-200"
                type="text"
                value={price}
                onChange={(e) => {
                  const inputValue = e.target.value.replace(/[^\d]/g, "");
                  const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setPrice(formattedValue);
                }}
                placeholder="مثال: 2,000,000"
                inputMode="numeric"
              />
              <button
                onClick={handleFilter}
                disabled={!price}
                className={`absolute right-2 top-1/2 -translate-y-1/2 h-9 px-4 rounded-md bg-[#7065F0] text-white text-sm font-medium transition-all duration-200
                  ${!price ? "opacity-50 cursor-not-allowed" : "hover:bg-[#5a4fcf] active:scale-95"}`}
                type="button"
              >
                اعمال فیلتر
              </button>
            </div>
          </div>

          <button
            onClick={onClear}
            className="text-sm text-[#9EA3AE] hover:text-white"
          >
            حذف فیلتر
          </button>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const { articles: allArticles, isLoading, error } = useArticles();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    if (maxPrice) {
      const filtered = allArticles.filter(article => {
        // تبدیل قیمت مقاله به عدد (حذف حروف و کاماها)
        const articlePrice = parseInt(
          article.price.replace(/[^\d]/g, ''), 
          10
        );
        return articlePrice <= maxPrice;
      });
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(allArticles);
    }
  }, [allArticles, maxPrice]);

  const handleToggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  if (isLoading) return (
    <div className="text-center py-12">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-[#7065f0] rounded-full border-t-transparent"></div>
      <p className="mt-4 text-gray-600">در حال بارگذاری املاک...</p>
    </div>
  );

  if (error) return (
    <div className="text-center py-12 text-red-500">
      <p>خطا در دریافت اطلاعات!</p>
      <p className="text-sm mt-2">{error.message}</p>
    </div>
  );

  return (
    <>
      <PriceFilter 
        onFilter={setMaxPrice} 
        onClear={() => setMaxPrice(null)} 
      />
      
      <section className="container mx-auto px-4 py-8">
        {maxPrice && (
          <div className="mb-6 text-center">
            <p className="text-lg text-[#7065f0]">
              نمایش {filteredArticles.length} خانه با قیمت کمتر از {maxPrice.toLocaleString()} تومان
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredArticles.map((article) => (
            <PropertyCard
              key={article.id}
              property={article}
              isFavorite={favorites.includes(article.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Articles;