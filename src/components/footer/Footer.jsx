import React from "react";
import PropTypes from "prop-types";
import { CiFacebook } from "react-icons/ci";
import { 
  FaGithub, 
  FaTelegram,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import footerData from "./Footer.json";

const SocialIcon = ({ iconName, url }) => {
  const iconStyle = "text-[#7065f0] hover:text-[#5a4fcf] transition-colors duration-300";
  
  const icons = {
    CiFacebook: <CiFacebook className={iconStyle} size={24} />,
    FaGithub: <FaGithub className={iconStyle} size={24} />,
    FaTelegram: <FaTelegram className={iconStyle} size={24} />,
    FaTwitter: <FaTwitter className={iconStyle} size={24} />,
    FaLinkedin: <FaLinkedinIn className={iconStyle} size={24} />,
    FaInstagram: <FaInstagram className={iconStyle} size={24} />
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-[#7065f0]/10 transition-colors"
      aria-label={`${iconName} صفحه رسمی`}
    >
      {icons[iconName] || null}
    </a>
  );
};

SocialIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const FooterColumn = ({ title, links }) => {
  if (!links?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[#000929] mb-2 border-b-2 border-[#7065f0] pb-2 inline-block">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-[#000929]/80 hover:text-[#7065f0] transition-colors text-sm md:text-base flex items-center gap-1.5"
            >
              <span className="w-2 h-2 bg-[#7065f0]/20 rounded-full"></span>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

const Footer = () => {
  const { 
    logoText = "خانوو", 
    columns = [],
    footerText = "", 
    socialIcons = [] 
  } = footerData || {};

  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#7065F0] to-[#feb47b] bg-clip-text text-transparent">
                {logoText}
              </h2>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                همراه شما در یافتن خانه رویایی‌تان
              </p>
            </div>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon 
                  key={index} 
                  iconName={icon.icon} 
                  url={icon.url} 
                />
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <FooterColumn 
                title={column.title}
                links={column.links}
              />
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            {footerText}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#7065f0] text-sm transition-colors">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-500 hover:text-[#7065f0] text-sm transition-colors">
              شرایط استفاده
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;