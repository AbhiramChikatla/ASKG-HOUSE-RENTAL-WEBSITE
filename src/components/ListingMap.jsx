import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import card from "../assets/card.png";
import right from "../assets/right.png";
import search from "../assets/search.png";
import cancel from "../assets/cancel.png";
import site1 from "../assets/site1.png";
import site2 from "../assets/site2.png";
import site3 from "../assets/site3.png";
import site4 from "../assets/site4.png";
import site5 from "../assets/site5.png";

import bath from "../assets/bath.png";
import location from "../assets/location.png";
import bed from "../assets/bed.png";
import expand from "../assets/expand.png";
import family from "../assets/family.png";

const ListingMap = () => {
    return (
        <div>
            <Navbar />
            <div className="main bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-40 xl:py-20 lg:mx-28 lg:py-10 md:mx-16 md:py-6 sm:mx-8 sm:py-4 mx-5 py-2">
                    <div className="content ">
                        <h1 className="font-bold xl:text-4xl tracking-wide md:text-xl text-lg text-center lg:text-left">
                            Find Property
                        </h1>
                        <div className="wrapper flex md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row">
                            <input
                                type="text"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                placeholder="Enter your Address"
                            />
                            <select
                                name="Price"
                                id="price"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                            >
                                <option value="Buy" className="text-gray-600">
                                    ₹ 0- ₹ 5,000
                                </option>
                                <option
                                    value="initial"
                                    className="text-gray-600"
                                >
                                    ₹ 5,000- ₹ 6,000
                                </option>
                                <option value="Sell" className="text-gray-600">
                                    ₹ 5,000- ₹ 10,000
                                </option>
                                <option value="Rent" className="text-gray-600">
                                    ₹ 10,000- ₹ 15,000
                                </option>
                                <option value="Rent" className="text-gray-600">
                                    ₹ 15,000- ₹ 20,000
                                </option>
                            </select>
                            <select
                                name="Category"
                                id="category"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                            >
                                <option
                                    value="initial"
                                    className="text-gray-600"
                                >
                                    Category
                                </option>
                                <option
                                    value="option 1"
                                    className="text-gray-600"
                                >
                                    Buy
                                </option>
                                <option
                                    value="option 2"
                                    className="text-gray-600"
                                >
                                    Sell
                                </option>
                                <option
                                    value="option 3"
                                    className="text-gray-600"
                                >
                                    Rent
                                </option>
                            </select>
                            <select
                                name="Bedrooms"
                                id="bedrooms"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                            >
                                <option
                                    value="initial"
                                    className="text-gray-600"
                                >
                                    Bed-1
                                </option>
                                <option
                                    value="option 1"
                                    className="text-gray-600"
                                >
                                    Beds-2
                                </option>
                                <option
                                    value="option 2"
                                    className="text-gray-600"
                                >
                                    Beds-3
                                </option>
                                <option
                                    value="option 3"
                                    className="text-gray-600"
                                >
                                    Beds-4
                                </option>
                            </select>
                            {/* <button className="flex gap-4 text-lg font-bold  px-5 bg-black text-white rounded-md items-center my-2 ">
                             */}
                            <button
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0 flex gap-2 bg-black text-white items-center font-bold
                            justify-center"
                            >
                                Search
                                <img
                                    src={search}
                                    alt=""
                                    className="size-4 invert"
                                />
                            </button>
                        </div>
                        <div className="anotherwrapper   md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row hidden md:flex">
                            <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    Bathrooms 2+
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div>
                            <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    Square Feet 750 - 2000 sq. ft
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div>
                            <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    Year Built 5 - 15
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div>
                            <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    New Construction
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div>
                        </div>
                        <div className="map my-10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45602200.69963488!2d78.56892959299232!3d45.76442716224267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710264493351!5m2!1sen!2sin"
                                height="430"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="w-[100%]"

                            ></iframe>
                        </div>
                    </div>
                    <div className="container  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 mx-auto my-10 gap-5 justify-center">
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site1}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site2}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site3}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site4}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site5}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site1}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site2}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px]">
                            <img
                                src={site3}
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    2861 62nd Ave, Oakland, CA 94605
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            3 Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            1 Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                            1,032 sqft
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                            Family
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                        ₹ 649,900
                                    </h1>
                                </div>
                            </div>
                        </div>
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

export default ListingMap;
