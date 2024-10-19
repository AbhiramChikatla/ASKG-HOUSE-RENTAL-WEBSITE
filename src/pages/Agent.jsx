import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import right from "../assets/rightwhite.png";
import rightblack from "../assets/right.png";
import AgentCard from "../components/AgentCard";
import { backendUrl } from "../context/userContext";

const Agent = () => {
    const [agentData, setAgentData] = useState([]);
    const FetchAgentData = async () => {
        let response = await fetch(`${backendUrl}/agents_data`);
        let content = await response.json();
        console.log(content)
        setAgentData(content);
    };

    useEffect(() => {
        FetchAgentData();
    }, []);
    return (
        <div>
            <Navbar />
            <div className="main bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-40 xl:py-20 lg:mx-28 lg:py-10 md:mx-16 md:py-6 sm:mx-8 sm:py-4 mx-5 py-2 flex flex-col items-center lg:block">
                    <div className="content my-10">
                        <h1 className="font-bold xl:text-4xl tracking-wide md:text-xl text-lg text-center lg:text-left">
                            Some Nearby Good Agents
                        </h1>
                        <div className="wrapper flex md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row items-center">
                            <input
                                type="text"
                                className="py-3  rounded-lg lg:my-5 px-5 lg:px-10 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                placeholder="Enter your Address "
                            />
                            <select
                                name="Reviews"
                                id="reviews"
                                className="py-3  rounded-lg lg:my-5 px-5 lg:px-10 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                            >
                                <option
                                    value="initial"
                                    className="text-gray-600"
                                >
                                    Reviews
                                </option>
                                <option
                                    value="option 1"
                                    className="text-gray-600"
                                >
                                    5 rating
                                </option>
                                <option
                                    value="option 2"
                                    className="text-gray-600"
                                >
                                    4 rating
                                </option>
                                <option
                                    value="option 3"
                                    className="text-gray-600"
                                >
                                    3 rating
                                </option>
                                <option
                                    value="option 3"
                                    className="text-gray-600"
                                >
                                    2 rating
                                </option>
                            </select>
                            <button className="flex gap-4 text-lg font-bold py-2 px-5 bg-black text-white rounded-md items-center my-2 ">
                                Search
                                <img src={right} alt="" className="size-5 " />
                            </button>
                        </div>
                    </div>
                    <div className="container  w-full grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 gap-x-[50px] gap-y-[30px]">
                        {agentData.map((item, ind) => (
                            <AgentCard key={ind} item={item} />
                        ))}
                    </div>
                    <div className="navigation mt-5 flex justify-between flex-col sm:flex-row gap-x-10 gap-y-4 sm:items-center lg:gap-2">
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
                                <img src={rightblack} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Agent;
