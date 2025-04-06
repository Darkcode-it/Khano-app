import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import texts from "./Calculator.json";

const NumberInput = ({ value, onChange, placeholder }) => {
  const handleChange = useCallback((e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, "");
    onChange(inputValue);
  }, [onChange]);

  const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <input
      className="w-full h-12 px-4 text-center rounded-lg border border-gray-300 bg-white text-gray-800 focus:border-[#7065F0] focus:ring-2 focus:ring-[#7065F0]/20 outline-none transition-all duration-200"
      type="text"
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
      inputMode="numeric"
    />
  );
};

const There = ({ onCalculate }) => {
  const [value, setValue] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = useCallback(() => {
    if (!value) return;
    
    setIsCalculating(true);
    
    // تبدیل مقدار به عدد (حذف کاماها)
    const numericValue = parseInt(value.replace(/,/g, ''), 10);
    
    // فراخوانی تابع callback با مقدار عددی
    onCalculate(numericValue);
    
    setIsCalculating(false);
  }, [value, onCalculate]);

  return (
    <section className="w-full max-w-6xl mx-auto my-8 px-4">
      <div className="bg-gradient-to-r from-[#100A55] to-[#241D7E] text-white p-8 rounded-2xl shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{texts.title}</h1>
            <h2 className="text-xl md:text-2xl font-medium text-[#C9C7E3] mb-6">
              {texts.subtitle}
            </h2>
            <p className="text-base text-[#9EA3AE] leading-relaxed">
              {texts.description}
            </p>
          </header>

          <div className="mb-8">
            <div className="relative w-full max-w-md mx-auto">
              <NumberInput
                value={value}
                onChange={setValue}
                placeholder={texts.placeholder}
              />
              <button
                onClick={handleCalculate}
                disabled={!value || isCalculating}
                className={`absolute right-2 top-1/2 -translate-y-1/2 h-9 px-4 rounded-md bg-[#7065F0] text-white text-sm font-medium transition-all duration-200
                  ${!value || isCalculating ? "opacity-50 cursor-not-allowed" : "hover:bg-[#5a4fcf] active:scale-95"}`}
                type="button"
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    {texts.calculatingText || "Calculating..."}
                  </span>
                ) : (
                  texts.buttonText
                )}
              </button>
            </div>
          </div>

          <footer className="text-sm text-[#9EA3AE]">
            <p>{texts.footerText}</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

There.propTypes = {
  onCalculate: PropTypes.func.isRequired,
  texts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
    calculatingText: PropTypes.string
  })
};

export default There;