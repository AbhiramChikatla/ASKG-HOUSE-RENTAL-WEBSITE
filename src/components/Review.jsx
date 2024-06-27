import React, { useState } from "react";
import person1 from "../assets/person1.png";
import quotes from "../assets/straight-quotes.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import right from "../assets/right-arrow.png";

const Review = (props) => {
    const data=props.data
    const [slide, setSlide] = useState(0)
    const prevSlide = () => {
        if (slide == 0) {
            return false;
        }
        setSlide(slide - 3);
        console.log(data, slide);
    };
    const nextSlide = () => {
        console.log(data, slide);
        if (data.length - 3 <= slide) {
            return false;
        }
        setSlide(slide + 3);
    };
    return (
        <div className="two flex mt-10 flex-col lg:flex-row justify-center w-full 
        
        "
        style={props.style}>
            {/* <div className="two-one lg:w-fit lg:p-10 w-full flex justify-center ">
                <div className="images ">
                    <img
                        src={person1}
                        alt=""
                        className="w-[465px] h-[350px] object-contain"
                    />
                </div>
            </div>
            <div className="two-two lg:w-1/2 p-10 w-full ">
                <div className="names flex items-center justify-between">
                    <div className="left ">
                        <h1 className="text-3xl font-bold tracking-wide py-2     ">
                            {props.name}
                        </h1>
                        <p className="text-lg font-semibold text-[#6E6E6E] ">
                            {props.designation} - {props.company}
                        </p>
                    </div>
                    <div className="right   hidden sm:block">
                        <img src={quotes} alt="" />
                    </div>
                </div>
                <div className="info">
                    <p className="text-lg font-semibold text-[#6E6E6E] py-5 ">
                        {props.desc}
                    </p>
                </div>
                <div className="nav flex justify-between">
                    <button className="flex items-center gap-2">
                        <img src={arrow} alt="" />
                        <span className="text-xl text-[#787878] font-semibold" onClick={prevSlide}>
                            {" "}
                            Preview
                        </span>
                    </button>
                    <button className="flex items-center gap-2">
                        <span className="text-xl  font-semibold text-[#FD6F1B]" onClick={nextSlide}>
                            {" "}
                           Next
                        </span>
                        <img src={right} alt="" />
                    </button>
                </div>
            </div> */}
            <div className="two-one lg:w-fit lg:p-10 w-full flex justify-center ">
                <div className="images ">
                    <img
                        src={person1}
                        alt=""
                        className="w-[465px] h-[350px] object-contain"
                    />
                </div>
            </div>
            <div className="two-two lg:w-1/2 p-10 w-full ">
                <div className="names flex items-center justify-between">
                    <div className="left ">
                        <h1 className="text-3xl font-bold tracking-wide py-2     ">
                            {props.name}
                        </h1>
                        <p className="text-lg font-semibold text-[#6E6E6E] ">
                            {props.designation} - {props.company}
                        </p>
                    </div>
                    <div className="right   hidden sm:block">
                        <img src={quotes} alt="" />
                    </div>
                </div>
                <div className="info">
                    <p className="text-lg font-semibold text-[#6E6E6E] py-5 ">
                        {props.desc}
                    </p>
                </div>
                <div className="nav flex justify-between">
                    <button className="flex items-center gap-2">
                        <img src={arrow} alt="" />
                        <span className="text-xl text-[#787878] font-semibold" onClick={prevSlide}>
                            {" "}
                            Preview
                        </span>
                    </button>
                    <button className="flex items-center gap-2">
                        <span className="text-xl  font-semibold text-[#FD6F1B]" onClick={nextSlide}>
                            {" "}
                           Next
                        </span>
                        <img src={right} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;
