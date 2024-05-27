import React, { useEffect, useState } from "react";

import bath from "../assets/bath.png";
import location from "../assets/location.png";
import bed from "../assets/bed.png";
import expand from "../assets/expand.png";
import family from "../assets/family.png";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import right from "../assets/right-arrow.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
    const [data, setdata] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchData = async () => {
        let response = await fetch("http://localhost:3000/slider_info");
        let fetchedata = await response.json();
        setdata(fetchedata);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const prevSlide = () => {
        if (slide == 0) {
            return false;
        }
        setSlide(slide - 3);
    };
    const nextSlide = () => {
        console.log(data, slide);
        if (data.length - 3 <= slide) {
            return false;
        }
        setSlide(slide + 3);
    };

    return (
        <div>
                <div className="headings flex justify-between items-center sm:flex-row flex-col gap-4 ">
                    <h1 className="text-3xl font-bold tracking-wide py-2">
                        Latest Property Listings
                    </h1>
                    {/* <Link to={"/listing"}> */}
                    <h1 className="flex gap-2  text-xl">
                        <div
                            className="size-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer"
                            onClick={prevSlide}
                            style={{
                                backgroundColor: slide == 0 && "#f4f4f5",
                            }}
                        >
                            <FaArrowLeft />
                        </div>
                        <div
                            className="size-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer"
                            onClick={nextSlide}
                            style={{
                                backgroundColor:
                                    data.length - 3 == slide && "#f4f4f5",
                            }}
                        >
                            <FaArrowRight />
                        </div>
                    </h1>
                    {/* </Link> */}
                </div>
                {/* <div className="  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 mx-auto my-10 gap-5 justify-center"> */}
                <div className="flex my-4 overflow-hidden ">
                    {data.map((item, index) => {
                        return (
                            <Cards
                                {...item}
                                key={index}
                                className="duration-300"
                                style={{
                                    transform: `translateX(-${slide * 100}%)`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
    );
};

export default Slider;
