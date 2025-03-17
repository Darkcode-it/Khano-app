// Menu.jsx
import React, {useState} from 'react';
import {useMenuLogic} from './menu';
import menu from "./Menu.json"


const Menu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (<div className=" flex justify-between w-full bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-1">
            <div className="flex items-center justify-between md:justify-start">
                <div className="text-xl font-bold ">خانوو</div>

                {/* Hamburger Button for Mobile */}
                <button
                    className="md:hidden p-2 focus:outline-none order-2 ml-4"
                    onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                    </svg>
                </button>
            </div>

            {/* Menu Items */}
            <div
                className={`md:flex gap-10 justify-center ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row mt-4 md:mt-0`}>
                <MenuItem
                    title="ساختمان"
                    items={[{name: 'تکمه', link: '/takmeh'},
                        {name: 'شناژ ', link: '/shenas'},
                        {name: 'نیمه شناژ', link: '/nime-shenazh'
                    }, {name: 'شناس قائم', link: '/shenas-ghaem'},
                        {name: 'آهن', link: '/ahan'}
                    ]}
                />
                <MenuItem
                    title="آپارتمان"
                    items={[{name: 'اجاره', link: '/rent'},
                        {name: 'فروشی', link: '/sale'}
                    ]}
                />
                <MenuItem
                    title="زمین مسکونی"
                    items={[{name: 'محدوده', link: '/limited'},
                        {name: 'غیر محدوده', link: '/unlimited'}]}
                />
                <MenuItem
                    title="کشاورزی"
                    items={[{name: 'دیمه', link: '/dimeh'},
                        {name: 'بارانی', link: '/barani'}
                    ]}
                />

                {/* Desktop Login/Register Buttons */}
                <div className="hidden md:flex items-center gap-8 order-3 pr-90">
                    <a href="/login"
                       className="text-gray-900 bg-white border border-gray-300 focus:outline-none
                        hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5
                        dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
                         dark:hover:border-gray-600 dark:focus:ring-gray-700">ورود</a>
                    <a href="/register"
                       className="py-2.5 px-5 text-sm focus:outline-none bg-white rounded-lg
                        border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10
                         focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
                          dark:text-gray-400 dark:border-gray-600 dark:hover:text-white
                           dark:hover:bg-gray-700">ثبت نام</a>
                </div>


                {/* Mobile Login/Register Buttons */}
                {isMobileMenuOpen && (<div className="md:hidden flex flex-col gap-2 mt-4">
                    <a href="/login"
                       className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-center transition-colors">ورود</a>
                    <a href="/register"
                       className="px-4 py-2 bg-green-600 hover:bg-green-300 rounded text-center transition-colors">ثبت
                        نام</a>
                </div>)}
            </div>

        </div>
    </div>);
};

const MenuItem = ({title, items}) => {
    const {isOpen, handleMouseEnter, handleMouseLeave, toggleOpen} = useMenuLogic();

    return (<div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <button
            className="w-full text-right md:text-center hover:text-gray-300 transition-colors p-2 focus:outline-none"
            onClick={toggleOpen}
        >
            {title}
        </button>
        {/* Mobile submenu */}
        {isOpen && (<div className="md:hidden">
            {items.map((item, index) => (<a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-gray-300 hover:text-white transition-colors text-right"
            >
                {item.name}
            </a>))}
        </div>)}
        {/* Desktop submenu */}
        {isOpen && (<div
            className="hidden md:block absolute right-0 top-full w-40 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden animate-fadeIn z-10">
            {items.map((item, index) => (<a
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
                {item.name}
            </a>))}
        </div>)}
    </div>);
};

export default Menu;