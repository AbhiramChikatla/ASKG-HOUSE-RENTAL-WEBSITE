import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cover from "../assets/cover.png";
import agent from "../assets/agent.png";
import env from "../assets/envelope.png";
import phonecall from "../assets/telephone.png";
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
import right from "../assets/right.png";

import stack from "../assets/stackoverflow.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import ruser from "../assets/ruser.png";
import down from "../assets/down.png";

import { Link } from "react-router-dom";
const AgentProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="bgimg w-full mt-5">
                <img src={cover} alt="" />
            </div>
            {/* <div className="actual-content xl:mx-40 xl:py-20 lg:mx-28 lg:py-10 md:mx-16 md:py-6 sm:mx-8 sm:py-4 mx-5 py-2 bg-[#FFF9F6]"> */}
            {/* <div className="agentinfo border-2 border-gray-300 lg:w-2/3 bg-white p-10 rounded-md  w-full my-10 ">
                    <h1 className="text-2xl font-bold tracking-wide py-2 text-center sm:text-left">
                        Agent Information
                    </h1>
                    <div className="m_w  sm:gap-10 sm:items-start flex flex-col sm:flex-row items-center gap-5">
                        <div>
                            <img
                                src={agent}
                                alt=""
                                className="size-[150px] my-5"
                            />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-wide py-2">
                                Bruno Fernandes
                            </h1>
                            <div className="rating flex justify-between gap-2 items-center">
                                <div className="wrapper_ratings ">
                                    <span
                                        class=""
                                        data-index="0"
                                        data-forhalf="★"
                                        className="text-orange-600 text-lg"
                                    >
                                        ★
                                    </span>
                                    <span
                                        class=""
                                        data-index="0"
                                        data-forhalf="★"
                                        className="text-orange-600 text-lg"
                                    >
                                        ★
                                    </span>
                                    <span
                                        class=""
                                        data-index="0"
                                        data-forhalf="★"
                                        className="text-orange-600 text-lg"
                                    >
                                        ★
                                    </span>
                                    <span
                                        class=""
                                        data-index="0"
                                        data-forhalf="★"
                                        className="text-orange-600 text-lg"
                                    >
                                        ★
                                    </span>
                                    <span
                                        class=""
                                        data-index="0"
                                        data-forhalf="★"
                                        className="text-orange-600 text-lg"
                                    >
                                        ★
                                    </span>
                                </div>
                                <div className="rating_info">4.5 reviews</div>
                            </div>
                            <div className="mail flex gap-2 py-2">
                                <img src={env} alt="" />
                                <span className="text-[#929292]">
                                    bruno@askg.com
                                </span>
                            </div>
                            <div className="mail flex gap-2 py-2">
                                <img src={phonecall} alt="" />
                                <span className="text-[#929292]">
                                    +91-88972694351
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
            <div className="org bg-[#FFF9F6] w-full">
                <div className="actual-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8     px-5 rounded-md">
                    <div className="agent flex lg:justify-between lg:items-start flex-col lg:flex-row items-center">
                        <div className=" flex lg:gap-7 flex-col lg:flex-row items-center ">
                            <div className=" relative bottom-10 image">
                                <img
                                    src={agent}
                                    alt=""
                                    className="size-[150px]"
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold tracking-wide py-2">
                                    Bruno Fernandes
                                </h1>
                                <div className="rating flex gap-2 items-center justify-around">
                                    <div className="wrapper_ratings ">
                                        <span
                                            class=""
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            class=""
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            class=""
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            class=""
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            class=""
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                    </div>
                                    <div className="rating_info text-[#192E2E]">
                                        4.5 reviews
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mail-details">
                            <div className="mail flex gap-2 py-2">
                                <img src={env} alt="" />
                                <span className="text-[#929292] font-bold">
                                    bruno@askg.com
                                </span>
                            </div>
                            <div className="mail flex gap-2 py-2">
                                <img src={phonecall} alt="" />
                                <span className="text-[#929292] font-bold">
                                    +91-88972694351
                                </span>
                            </div>
                        </div>
                        <div className="contact-btn mt-4 ">
                            <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-500">
                                <Link to={"/contact"}>Contact</Link>
                            </button>
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
                    </div>
                    <div className="navigation mt-5 flex justify-between flex-col sm:flex-row gap-2 sm:items-center my-20">
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
                    <div className="agentinfo border-2 border-gray-300  bg-white p-10 rounded-md  w-full my-10 flex gap-10 items-center flex-col lg:flex-row ">
                        <div className="first lg:w-1/2 w-full">
                            <div className="m_w sm:gap-10 sm:items-center flex flex-col sm:flex-row items-center gap-5">
                                <div>
                                    <img
                                        src={agent}
                                        alt=""
                                        className="size-[150px] my-5"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold tracking-wide py-2">
                                        Bruno Fernandes
                                    </h1>
                                    <div className="rating flex justify-between gap-2 items-center">
                                        <div className="wrapper_ratings ">
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                        </div>
                                        <div className="rating_info">
                                            4.5 reviews
                                        </div>
                                    </div>
                                    <div className="mail flex gap-2 py-2">
                                        <img src={env} alt="" />
                                        <span className="text-[#929292]">
                                            bruno@askg.com
                                        </span>
                                    </div>
                                    <div className="mail flex gap-2 py-2">
                                        <img src={phonecall} alt="" />
                                        <span className="text-[#929292]">
                                            +91-88972694351
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="desc">
                                <p className="text-lg font-semibold text-[#6E6E6E]">
                                    A slider is great way to display a slideshow
                                    featuring images or videos, usually on your
                                    homepage.Adding sliders to your site is no
                                    longer difficult. You don't have to know
                                    coding anymore. Just use a slider widget and
                                    it will automatically insert the slider on
                                    your web page. One of the best ways to add
                                    beautiful sliders with excellent
                                    responsiveness and advanced options.
                                </p>
                                <button className="bg-black py-2 px-5 text-white rounded-md font-bold my-5 w-full lg:w-auto">
                                    <Link to={"/contact"}>Contact</Link>
                                </button>
                            </div>
                        </div>
                        <div className="second lg:w-1/2 w-full  lg:text-left">
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Experiences
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    15+ years experience
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Property Types
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    Private House, Villa, Townhouse, Apartment
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Area
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    California, San Jose, Miami
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Address
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    59 Orchard, NY 5005, US
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    License No
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    BF-0535
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Social
                                </h1>
                                <div className="icons flex gap-4 pt-4 mb-10">
                                    <img src={facebook} alt="" />
                                    <img src={linkedin} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={youtube} alt="" />
                                    <img src={stack} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="for-review border-2 border-gray-300  bg-white lg:p-10 rounded-md  w-full my-10 flex gap-10 items-center flex-col lg:flex-row p-5">
                        <div className="review_cont w-full flex flex-col gap-5">
                            <div className="heading flex justify-between w-full border-b pb-5 border-gray-300 flex-col sm:flex-row items-center gap-2">
                                <h1 className="text-3xl font-bold tracking-wide py-2">
                                    Clients Review
                                </h1>
                                <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-500">
                                    Write a Review +
                                </button>
                            </div>
                            <div className="reviews border-[1px] border-gray-300 rounded-md p-5">
                                <p className="text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                    Eget eu massa et consectetur. Mauris donec.
                                    Leo a, id sed duis proin sodales. Turpis
                                    viverra diam porttitor mattis morbi ac amet.
                                    Euismod commodo. We get you customer
                                    relationships that last.
                                </p>
                                <div className="rating flex justify-between my-10 flex-wrap gap-4">
                                    <div className="wrapper_ratings flex gap-4 items-center text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                        <div className="spans">
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                        </div>
                                        <p>4.5 reviews</p>
                                    </div>
                                    <div className="time text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                        14 March 2024
                                    </div>
                                </div>

                                <div className="user-desc flex gap-3">
                                    <img
                                        src={ruser}
                                        alt=""
                                        className="size-[80px]"
                                    />
                                    <div>
                                        <h1 className="text-xl font-bold tracking-wide py-2">
                                            Taylor Wilson
                                        </h1>
                                        <p className="font-semibold">
                                            Product Manager - Static Mania
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews border-[1px] border-gray-300 rounded-md p-5">
                                <p className="text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                    Eget eu massa et consectetur. Mauris donec.
                                    Leo a, id sed duis proin sodales. Turpis
                                    viverra diam porttitor mattis morbi ac amet.
                                    Euismod commodo. We get you customer
                                    relationships that last.
                                </p>
                                <div className="rating flex justify-between my-10 flex-wrap gap-4">
                                    <div className="wrapper_ratings flex gap-4 items-center text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                        <div className="spans">
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                        </div>
                                        <p>4.5 reviews</p>
                                    </div>
                                    <div className="time text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                        14 March 2024
                                    </div>
                                </div>

                                <div className="user-desc flex gap-3">
                                    <img
                                        src={ruser}
                                        alt=""
                                        className="size-[80px]"
                                    />
                                    <div>
                                        <h1 className="text-xl font-bold tracking-wide py-2">
                                            Taylor Wilson
                                        </h1>
                                        <p className="font-semibold">
                                            Product Manager - Static Mania
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews border-[1px] border-gray-300 rounded-md p-5">
                                <p className="text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                    Eget eu massa et consectetur. Mauris donec.
                                    Leo a, id sed duis proin sodales. Turpis
                                    viverra diam porttitor mattis morbi ac amet.
                                    Euismod commodo. We get you customer
                                    relationships that last.
                                </p>
                                <div className="rating flex justify-between my-10 flex-wrap gap-4">
                                    <div className="wrapper_ratings flex gap-4 items-center text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                        <div className="spans">
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                            <span
                                                class=""
                                                data-index="0"
                                                data-forhalf="★"
                                                className="text-orange-600 text-lg"
                                            >
                                                ★
                                            </span>
                                        </div>
                                        <p>4.5 reviews</p>
                                    </div>
                                    <div className="time text-[#6E6E6E] font-semibold tracking-wide text-lg">
                                        14 March 2024
                                    </div>
                                </div>

                                <div className="user-desc flex gap-3">
                                    <img
                                        src={ruser}
                                        alt=""
                                        className="size-[80px]"
                                    />
                                    <div>
                                        <h1 className="text-xl font-bold tracking-wide py-2">
                                            Taylor Wilson
                                        </h1>
                                        <p className="font-semibold">
                                            Product Manager - Static Mania
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="seemore">
                                <button className="bg-white py-2 px-5 text-gray-700 border-[1px] border-gray-700 rounded-md font-bold hover:text-gray-500 flex gap-2 items-center">
                                    <Link to={"/contact"}>See More</Link>
                                    <img
                                        src={down}
                                        alt=""
                                        className=" size-4"
                                    />
                                </button>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="towrapup bg-[#FFF9F6] w-full h-10"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AgentProfile;
