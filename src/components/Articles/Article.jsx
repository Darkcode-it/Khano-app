// Articles.jsx
import React from 'react';
import {FaRegHeart} from 'react-icons/fa6';
import {MdOutlineBedroomParent, MdOutlineBathroom} from 'react-icons/md';
import {LiaExternalLinkSquareAltSolid} from 'react-icons/lia';
import useArticles from './Article.js'; // Importing the custom hook

export default function Articles() {
    const {articles} = useArticles();

    return (<div className=" flex justify-center mt-[50px] md:mt-0 p-10">
        <div className="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {articles.map((article) => (<div
                key={article.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                 relative overflow-hidden group">
                <img
                    className="rounded-t-lg w-full h-48 md:h-56 object-cover transition-transform duration-300
                     ease-in-out group-hover:scale-105 group-hover:brightness-75"
                    src={article.image}
                    alt="تصویر خانه"
                />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg md:text-xl font-bold text-[#7065f0]">
                            {article.price}
                        </h1>
                        <FaRegHeart size="1.5rem" color="#7065f0" className="cursor-pointer"/>
                    </div>
                    <h1 className="text-lg md:text-xl font-bold text-[#7065f0] mt-2">
                        {article.title}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        {article.address}
                    </p>
                    <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-3">
                        <div className="flex items-center gap-2">
                            <MdOutlineBedroomParent
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                                size="1.5rem"
                                color="#7065f0"
                            />
                            <span className="text-gray-600">
                                        {article.beds} خواب
                                    </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdOutlineBathroom
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                                size="1.5rem"
                                color="#7065f0"
                            />
                            <span className="text-gray-600">
                                        {article.baths} حمام
                                    </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LiaExternalLinkSquareAltSolid
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                                size="1.5rem"
                                color="#7065f0"
                            />
                            <span className="text-gray-600">
                                        {article.size}
                                    </span>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    </div>);
}