import React from "react";

import a from "../assets/a.png";
import s from "../assets/s.png";
import k from "../assets/k.png";
import g from "../assets/g.png";
import aa from "../assets/aa.png";
import kk from "../assets/kk.png";
import gg from "../assets/gg.png";
import ff from "../assets/ff.png";
import { Link } from "react-router-dom";
const AgentCard = ({ item }) => {
    const imgList = [a, s, k, g, aa, kk, gg, ff];
    let randImg = imgList[Math.floor(8 * Math.random())];
    return (
        <Link
            to={"/agentprofile/" + item._id}
            className="card  lg:w-[calc(78vw/4)] py-2 px-2 md:w-[calc(78vw/2)] w-full mx-auto bg-white xl:h-[100vh] max-w-[325px] max-h-[475px]"
        >
            <img
                src={randImg}
                alt=""
                className=" h-[285px] w-full lg:w-auto object-cover"
            />
            <div className="content">
                <h1 className="font-semibold text-2xl tracking-wide pt-4">
                    {item.name}
                </h1>

                <div className="metadata text-gray-600 py-2">
                    <ul className="flex gap-5 text-[13px] items-center justify-normal">
                        <li>
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
                                className=" text-lg"
                            >
                                ★
                            </span>
                        </li>
                        <li>{item.rating} reviews</li>
                    </ul>
                </div>
                <button className="font-bold text-gray-700 w-full border-2 py-2 px-4 rounded-md my-2 hover:text-white hover:bg-black">
                    View Profile
                </button>
            </div>
        </Link>
    );
};

export default AgentCard;
