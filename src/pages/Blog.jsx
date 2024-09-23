import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import right from "../assets/right.png";
import cancel from "../assets/cancel.png";

import { useForm } from "react-hook-form";
import aling from "../assets/aling.png";
import { useState,useEffect } from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
    const [cont, setCont] = useState(["Hyderabad", "Buy", "4 star"]);
    const [blogData,setBlogData]=useState([])


    const fetchBlogData = async () => {
        let response = await fetch("http://localhost:3000/blog");
        let fetched_data = await response.json();
        setBlogData(fetched_data);
    };

    useEffect(() => {
        fetchBlogData();
    }, []);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();
    const onSubmit = async (data) => {
        reset();
        let response = await fetch("http://localhost:3000/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let content = await response.text();
        console.log(content, response);
        setCont(Object.values(data));
    };
    const handleClick = (e) => {
        console.log(e.target, e.target.innerText);
        setCont((oldValues) => {
            return oldValues.filter((val) => val !== e.target.innerText);
        });
    };
    return (
        <div>
            <Navbar />
            <div className="main bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-40 xl:py-20 lg:mx-28 lg:py-10 md:mx-16 md:py-6 sm:mx-8 sm:py-4 mx-5 py-2">
                    <div className="content ">
                        <h1 className="font-bold xl:text-4xl tracking-wide md:text-xl text-lg text-center lg:text-left">
                            Real Estate News & Blogs
                        </h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="wrapper flex md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row items-center"
                        >
                            <input
                                type="text"
                                name="area"
                                className="py-3  rounded-lg lg:my-5 px-5 lg:px-10 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                placeholder="Enter your Area "
                                {...register("area", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            />
                            <select
                                name="category"
                                id="category"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                defaultValue={"Buy"}
                                {...register("category", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            >
                                <option
                                    value="Category"
                                    className="text-gray-600"
                                >
                                    Category
                                </option>
                                <option value="Buy" className="text-gray-600">
                                    Buy
                                </option>
                                <option value="Sell" className="text-gray-600">
                                    Sell
                                </option>
                                <option value="Rent" className="text-gray-600">
                                    Rent
                                </option>
                            </select>
                            <select
                                name="popular"
                                id="popular"
                                className="py-3  rounded-lg lg:my-5 px-5 lg:px-10 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                defaultValue={"5 star"}
                                {...register("popular", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            >
                                <option
                                    value="2 star"
                                    className="text-gray-600"
                                >
                                    2 star
                                </option>
                                <option
                                    value="3 star"
                                    className="text-gray-600"
                                >
                                    3 star
                                </option>
                                <option
                                    value="4 star"
                                    className="text-gray-600"
                                >
                                    4 star
                                </option>
                                <option
                                    value="5 star"
                                    className="text-gray-600"
                                >
                                    5 star
                                </option>
                            </select>
                            <input
                                type="submit"
                                value="Search"
                                disabled={isSubmitting}
                                className="py-2  rounded-lg lg:my-3 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0 flex gap-2 bg-black text-white items-center font-bold
                            justify-center cursor-pointer"
                            />
                        </form>
                        {(errors.area || errors.category || errors.popular) && (
                            <div className="text-red-600 flex gap-2 items-center  mb-5 justify-center lg:justify-start">
                                <img src={aling} alt="" className="size-4" />
                                Please fill all the details
                            </div>
                        )}
                        <div className="anotherwrapper   md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row hidden md:flex">
                            {cont.map((item) => (
                                <div key={item} className="todisplay">
                                    <button
                                        className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through"
                                        onClick={handleClick}
                                    >
                                        {item}
                                        <img src={cancel} className="size-2" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1">
                        {blogData.map((item,ind)=>(
                             <BlogCard data={item} key={ind}/>
                        ))}
                    </div>
                    <div className="navigation mt-5 flex justify-between flex-col sm:flex-row gap-2 sm:items-center">
                        <div className="number flex gap-2">
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                1
                            </div>
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                2
                            </div>
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                3
                            </div>
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                4
                            </div>
                        </div>
                        <div className="nextpage">
                            <button className="flex gap-2 border-[1px] border-black  py-2 px-5 rounded-md font-semibold">
                                Next Page
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
