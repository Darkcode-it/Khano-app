import React, { useState } from "react";
import texts from "./Calculator.json"; // ایمپورت فایل JSON

function There() {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, ""); // فقط اعداد را نگه دار
        const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // جداکننده هزارگان
        setValue(formattedValue); // مقدار فرمت‌شده را در state ذخیره کن
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto my-5 mb-12 text-center bg-[#100A55] text-white p-5 rounded-2xl shadow-lg">
            <div className="flex justify-center items-center">
                <div className="max-w-[600px] mx-auto">
                    <h1 className="text-4xl font-semibold mb-2.5">{texts.title}</h1>
                    <h2 className="text-2xl font-medium mb-5">{texts.subtitle}</h2>
                    <p className="text-base text-[#9EA3AE] mb-7">{texts.description}</p>
                    <div className="flex justify-center items-center mb-7">
                        <div className="relative w-full max-w-[400px]">
                            <input
                                id="inputcalculate"
                                className="w-full h-10 text-center rounded-lg border border-[#ccc] bg-white text-black focus:border-[#7065F0] outline-none transition-colors"
                                type="text"
                                value={value}
                                onChange={handleInputChange}
                                placeholder={texts.placeholder}
                            />
                            <button
                                id="btncalculate"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-24 h-10 rounded-lg bg-[#7065F0] text-white border-none text-sm cursor-pointer transition-colors hover:bg-[#5a4fcf]"
                                type="button"
                            >
                                {texts.buttonText}
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-[#9EA3AE] mt-5">{texts.footerText}</p>
                </div>
            </div>
        </div>
    );
}

export default There;