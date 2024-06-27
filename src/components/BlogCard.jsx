import React from "react";
import card from "../assets/card.png";
import right from "../assets/right.png";
import { Link } from "react-router-dom";

const BlogCard = ({data}) => {
    return (
        <Link to={"/blogdetails/"+data._id} className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full">
            <img src={card} alt="" className=" h-[350px] w-full lg:w-auto" />
            <div className="content">
                <button className="font-bold text-gray-500  border-2 py-1 px-4 rounded-md my-4 hover:text-white hover:bg-black">
                    Business
                </button>
                <h1 className="font-semibold text-2xl tracking-wide">
                    {data.title}
                </h1>
                <div className="metadata text-gray-600 py-2">
                    <ul className="flex gap-5 text-[13px]">
                        <li> {data.date}</li>
                        <li> {data.minToRead} mins read</li>
                    </ul>
                </div>
                <div className="external flex items-center gap-3 text-[#6E6E6E] font-bold text-lg">
                    Continue Reading
                    <img src={right} alt="" />
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
