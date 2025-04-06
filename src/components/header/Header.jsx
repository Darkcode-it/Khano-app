// Header.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import headerData from "./Header.json";

const Header = () => {
  const { 
    TitleHeader, 
    SubTitleHeader, 
    company, 
    visit 
  } = headerData;

  const [activeTab, setActiveTab] = useState("اجاره");
  const [stats] = useState([
    { id: 1, value: "8k", label: company },
    { id: 2, value: "10k+", label: visit }
  ]);

  const tabs = [
    { id: "rent", label: "اجاره" },
    { id: "buy", label: "خرید" },
    { id: "sell", label: "فروش" }
  ];

  return (
    <header className="w-full relative min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/img/map3.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 " />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-10">
          {/* Headings Section */}
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fadeInUp">
              {TitleHeader}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 font-light leading-relaxed">
              {SubTitleHeader}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto md:max-w-2xl md:grid-cols-2 lg:grid-cols-2">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 transition-all hover:bg-white/20"
              >
                <div className="text-4xl font-bold text-indigo-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-medium text-indigo-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex bg-white/10 backdrop-blur-lg rounded-full border border-white/20 p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-indigo-500 text-white shadow-lg"
                      : "text-indigo-100 hover:bg-white/5"
                  }`}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  headerData: PropTypes.shape({
    TitleHeader: PropTypes.string.isRequired,
    SubTitleHeader: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    visit: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;