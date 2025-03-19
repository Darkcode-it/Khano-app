import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import footer from "./Footer.json"; // ایمپورت فایل JSON

function Footer() {
    const { logoText, links, secondColumnLinks, thirdColumnLinks, footerText, socialIcons } = footer;

    const renderIcon = (iconName) => {
        switch (iconName) {
            case "CiFacebook":
                return <CiFacebook size="30px" color="#7065f0" />;
            case "FaGithub":
                return <FaGithub size="30px" color="#7065f0" />;
            case "FaTelegram":
                return <FaTelegram size="30px" color="#7065f0" />;
            default:
                return null;
        }
    };

    return (
        <footer className="bg-white p-5 font-sans">
            <div>
                <h1 id="logoEnd" className="w-[150px] block mx-auto mb-5 font-medium text-5xl bg-gradient-to-r from-[#7065F0] via-[#feb47b] to-[#ff6f61] bg-[length:500%_auto] animate-gradientText">
                    {logoText}
                </h1>
            </div>
            <div className="flex justify-around flex-wrap gap-5 mb-5">
                <div>
                    <ul className="list-none p-0 m-0">
                        {links.map((link, index) => (
                            <li key={index} className="leading-8 text-sm">
                                <a href={link.url} className="no-underline text-[#000929] hover:text-[#7065f0] transition-colors">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="list-none p-0 m-0">
                        {secondColumnLinks.map((link, index) => (
                            <li key={index} className="leading-8 text-sm">
                                <a href={link.url} className="no-underline text-[#000929] hover:text-[#7065f0] transition-colors">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="list-none p-0 m-0">
                        {thirdColumnLinks.map((link, index) => (
                            <li key={index} className="leading-8 text-sm">
                                <a href={link.url} className="no-underline text-[#000929] hover:text-[#7065f0] transition-colors">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-white flex justify-between items-center text-gray-500 border-t border-[#e8e6f9] pt-5 text-sm">
                {footerText}
                <div className="flex gap-2.5">
                    {socialIcons.map((icon, index) => (
                        <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
                            {renderIcon(icon.icon)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;