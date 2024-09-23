import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cover from "../assets/cover.png";
import agent from "../assets/agent.png";
import env from "../assets/envelope.png";
import phonecall from "../assets/telephone.png";

import stack from "../assets/stackoverflow.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import ruser from "../assets/ruser.png";
import down from "../assets/down.png";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import right from "../assets/right.png";

import { Link } from "react-router-dom";
const AgentProfile = () => {
    const [agentData, setAgentData] = useState([]);
    const [ownerHouses, setOwnerHouses] = useState([]);
    const { id } = useParams();
    const fetchData = async () => {
        let response = await fetch("https://askg-api.vercel.app/agentprofile/" + id);
        let content = await response.json();
        setAgentData(content);
    };
    const fetchHousesData = async () => {
        let response = await fetch(
            "https://askg-api.vercel.app/fetchownerhouses/" + id
        );
        let content = await response.json();
        setOwnerHouses(content);
    };

    useEffect(() => {
        fetchData();
        fetchHousesData();
    }, [id]);
    return (
        <div>
            <Navbar />
            <div className="bgimg w-full mt-5">
                <img src={cover} alt="" />
            </div>

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
                                    {agentData.name}
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
                                        {agentData.rating} reviews
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mail-details">
                            <div className="mail flex gap-2 py-2">
                                <img src={env} alt="" />
                                <span className="text-[#929292] font-bold">
                                    {agentData.email}
                                </span>
                            </div>
                            <div className="mail flex gap-2 py-2">
                                <img src={phonecall} alt="" />
                                <span className="text-[#929292] font-bold">
                                    +91-{agentData.phoneNo}
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
                        {ownerHouses.length == 0 && (
                            <h1 className="text-3xl font-bold tracking-wide py-2">
                                No Houses Available
                            </h1>
                        )}
                        {ownerHouses.map((item, ind) => (
                            <Cards key={ind} {...item} />
                        ))}
                    </div>
                    {ownerHouses.length != 0 && (
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
                    )}
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
                                        {agentData.name}
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
                                            {agentData.rating} reviews
                                        </div>
                                    </div>
                                    <div className="mail flex gap-2 py-2">
                                        <img src={env} alt="" />
                                        <span className="text-[#929292]">
                                            {agentData.email}
                                        </span>
                                    </div>
                                    <div className="mail flex gap-2 py-2">
                                        <img src={phonecall} alt="" />
                                        <span className="text-[#929292]">
                                            +91-{agentData.phoneNo}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="desc">
                                <p className="text-lg font-semibold text-[#6E6E6E]">
                                    {agentData.description}
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
                                    {agentData.experience} + experience
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Property Types
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    {agentData.property_types}
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Area
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    {agentData.area}
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    Address
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    {agentData.address}
                                </p>
                            </div>
                            <div className="part py-2">
                                <h1 className="text-xl font-semibold tracking-wide py-1 ">
                                    License No
                                </h1>
                                <p className="text-lg tracking-wide text-[#6E6E6E] font-semibold">
                                    {agentData.license_no}
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
