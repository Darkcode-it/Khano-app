import React, {useEffect, useRef} from 'react';
import data from "./About.json";
import Store from "../Store/Story.jsx";

export default function Twodiv() {
    const {TitleTwodiv, paragraphSecond, textSecond, CompanyIcon} = data;
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                } else {
                    entry.target.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        }, {
            threshold: 0.5,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (<div
        ref={sectionRef}
        className="w-[90%] max-w-[1200px] mx-auto my-[50px] text-center flex flex-col items-center justify-center p-5 opacity-0 transform translate-y-[20px] transition-all duration-1000 ease-out bg-gradient-to-br from-[#E0DEF7] via-[#fad0c4] to-[#E0DEF7] bg-[size:400%_400%] animate-gradientBackground rounded-[15px] shadow-lg"
    >
        <h1 className="text-[40px] font-semibold leading-[56px]">
            {TitleTwodiv}
        </h1>
        <p className="text-[16px] font-normal leading-[25.6px] opacity-70 max-w-[600px] my-[20px]">
            {paragraphSecond}
        </p>
        <h2 className="text-[20px] font-normal leading-[32px] max-w-[500px] my-[20px]">
            {textSecond}
        </h2>
        <p className="bg-gradient-to-r from-[#7065F0] via-[#feb47b] to-[#ff6f61] bg-[size:500%_auto] animate-gradientText bg-clip-text text-transparent">
            {CompanyIcon}
        </p>
        <img

            className="w-full max-w-[300px] h-auto mt-[20px] rounded-[10px]"
            src="./img/p.svg"
            alt="User"
            loading="lazy"
        />
    </div>);
}