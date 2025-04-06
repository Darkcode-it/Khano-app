// Menu.jsx
import React, { useState, useEffect, useRef } from 'react';
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import menuData from './Menu.json';

const Menu = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSubMenu = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  // Handle login navigation
  const handleLoginClick = (e) => {
    e.preventDefault();
    onNavigate && onNavigate('login');
    setIsMobileMenuOpen(false);
  };

  // Handle register navigation
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onNavigate && onNavigate('register');
    setIsMobileMenuOpen(false);
  };

  // Handle home navigation
  const handleHomeClick = (e) => {
    e.preventDefault();
    onNavigate && onNavigate('home');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={menuRef}
      className="bg-gray-800 text-white shadow-lg relative z-50"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <span onClick={handleHomeClick} className="text-xl font-bold cursor-pointer">خانوو</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuData.map((section) => (
              <div 
                key={section.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(section.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={activeMenu === section.title}
                  className="flex items-center px-3 py-2 hover:text-blue-300 transition-colors"
                >
                  {section.title}
                  <ChevronDownIcon className="w-4 h-4 mr-1" />
                </button>

                {activeMenu === section.title && (
                  <div 
                    className="absolute right-0 mt-0 w-48 bg-white text-gray-800 shadow-lg rounded-md py-1"
                  >
                    {section.items.map((item) => (
                      <a
                        key={item.link}
                        href={item.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              onClick={handleLoginClick}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              ورود
            </a>
            <a
              href="#"
              onClick={handleRegisterClick}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
            >
              ثبت نام
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuData.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSubMenu(section.title)}
                  className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-600 rounded-md"
                >
                  {section.title}
                  <ChevronDownIcon className={`w-4 h-4 transform ${
                    activeMenu === section.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {activeMenu === section.title && (
                  <div className="pl-4">
                    {section.items.map((item) => (
                      <a
                        key={item.link}
                        href={item.link}
                        className="block px-3 py-2 hover:bg-gray-600 rounded-md"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 border-t border-gray-600">
              <a
                href="#"
                onClick={handleLoginClick}
                className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md mb-2"
              >
                ورود
              </a>
              <a
                href="#"
                onClick={handleRegisterClick}
                className="block w-full text-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md"
              >
                ثبت نام
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;