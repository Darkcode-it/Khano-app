
// Header.jsx
import React from "react";
import PropTypes from "prop-types";
import data from "./Header.json";

const Header = () => {
  return (
    <div
      id="header-container"
      className="w-full h-auto  bg-[url('./public/img/map3.jpg')] bg-no-repeat bg-cover backdrop-blur-[200px]">
      <h1 className="text-[40px] w-[420px] pr-10  md:text-[40px] md:w-full md:text-center md:pr-0  md:leading-[50px] pt-10 md:font-[350]">
        {data.TitleHeader}</h1>
      <p
        id="header-p"
        className="font-normal text-[20px] pr-10 w-[300px] mt-8 md:w-full md:text-center md:pr-0 md:my-5
         md:leading-[30px] md:font-[350]">
        {data.SubTitleHeader}
      </p>
      <span
        className="numbers-con flex gap-[80px] px-[60px] md:justify-center md:gap-[100px] md:px-0 lg:gap-[10px]"
        id="numbers-con-desk">
        <div className="img-num-container flex gap-6">
          <div>
            <p className="m- p-0 flex text-[32px] text-[#7065f0]">8k</p>
            <p className="text-[#000] text-[16px] font-normal">{data.company}</p>
          </div>
        </div>
        <div className="img-num-container flex gap-6">
          <div>
            <p className="m-0 p-0 flex text-[32px] text-[#7065f0]">10k+</p>
            <p className="text-[#000] text-[16px] font-normal">{data.visit}</p>
          </div>
        </div>
      </span>
      <div
        id="rent-list"
        className="mr-[9px] m-10 flex w-1/4 bg-white rounded-tl-lg rounded-tr-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)]
         hover:shadow-[0_8px_12px_rgba(0,0,0,0.2)] transition-shadow duration-300 ease-in-out
          hover:-translate-y-[2px] md:mr-0 md:mt-12 md:min-w-[20%] md:rounded-[20px] md:flex-wrap md:justify-center">
        <p className="px-[32px] py-[10px] font-bold text-[18px] text-[#7065f0] border-b-[3px]
         border-[#7065f0] cursor-pointer hover:text-[#7065f0] hover:-translate-y-[3px]
          transition-all duration-300 ease-in-out md:w-full md:text-center md:m-0">اجاره</p>
        <p className="px-[30px] py-[10px] font-normal text-[18px] border-b border-[#e0def7] cursor-pointer 
        hover:text-[#7065f0] hover:-translate-y-[3px] transition-all duration-300 ease-in-out md:w-full 
        md:text-center md:m-0">خرید</p>
        <p className="px-[30px] py-[10px] font-normal text-[18px] border-b border-[#e0def7] 
        cursor-pointer hover:text-[#7065f0] hover:-translate-y-[3px] transition-all duration-300 
        ease-in-out md:w-full md:text-center md:m-0">فروش</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    TitleHeader: PropTypes.string.isRequired,
    SubTitleHeader: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    visit: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;