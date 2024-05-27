import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import rone from "../assets/rone.png";
import rtwo from "../assets/rtwo.png";
import rthree from "../assets/rthree.png";
import rfour from "../assets/rfour.png";

import smile from "../assets/smile.png";
import fire from "../assets/fire.png";
import radio from "../assets/radio.png";
import dollar from "../assets/dollar.png";
import person from "../assets/person.png";
import vision from "../assets/vision.png";

import a from "../assets/a.png";
import s from "../assets/s.png";
import k from "../assets/k.png";
import g from "../assets/g.png";
import right from "../assets/right-arrow.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const AboutUs = () => {
    return (
        <div className="main">
            <Navbar />
            {/* <div className="aboutuspage mx-10 mt-5 sm:mx-44 sm:mt-20">
                <div className="content flex items-center mx-5 sm:mx-40 text-center leading-5 flex-col gap-5">
                    <h1 className="font-bold text-5xl">
                        Reimagining real estate to make it easier to unlock.
                    </h1>
                    <p className="text-lg text-gray-600">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so50%
                        blinded by desire, that they cannot foresee the pain and
                        trouble.
                    </p>
                </div>
            </div> */}
            <div className="aboutuspage mt-20 xl:mx-44 ">
                <div className="content text-center px-10 xl:mx-52 xl:leading-5 xl:flex xl:items-center xl:flex-col ">
                    <h1 className="font-bold text-4xl py-5">
                        Reimagining real estate to make it easier to unlock.
                    </h1>
                    <p className="text-lg text-gray-600 p-5">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble.
                    </p>
                </div>
                <div className="images flex flex-col items-center">
                    <div className="img-1 flex gap-5 shrink-0 flex-col lg:flex-row items-center lg:justify-center">
                        <img
                            src={rone}
                            alt=""
                            className="lg:w-[45%]    h-[60vh] rounded-lg w-[90%] xl:w-[60vw]"
                        />
                        <img
                            src={rtwo}
                            alt=""
                            className="lg:w-[45%]    h-[60vh] rounded-lg w-[90%] xl:w-[20vw]"
                        />
                    </div>
                    <div className="img-2 flex gap-5 pt-5 shrink-0 lg:flex-row flex-col items-center lg:justify-center">
                        <img
                            src={rthree}
                            alt=""
                            className="lg:w-[45%]    h-[60vh] rounded-lg w-[90%]  xl:w-[20vw]"
                        />
                        <img
                            src={rfour}
                            alt=""
                            className="lg:w-[45%]  h-[60vh] rounded-lg w-[90%] xl:w-[60vw]"
                        />
                    </div>
                </div>
            </div>
            <div className="bck bg-[#FFF9F5] ">
                <div className="ratings mt-20 xl:mx-44 mx-20 flex justify-evenly py-10 flex-col items-center md:flex-row ">
                    <div className="first bg-[#FFF9F5] flex flex-col gap-y-5 md:items-start items-center">
                        <div className="imglogo bg-white  p-5 w-fit rounded-full">
                            <img src={dollar} alt="" className="w-7 h-7 " />
                        </div>
                        <h1 className="font-bold text-4xl tracking-wide">
                            $15.4M
                        </h1>
                        <p className="text-[#406F85] text-xl tracking-wide md:w-[50%] w-full text-center md:text-left">
                            Owned from Properties transactions
                        </p>
                    </div>
                    <div className="first bg-[#FFF9F5] flex flex-col gap-y-5 md:items-start items-center">
                        <div className="imglogo bg-white  p-5 w-fit rounded-full">
                            <img src={radio} alt="" className="w-7 h-7 " />
                        </div>
                        <h1 className="font-bold text-4xl tracking-wide ">
                            25K+
                        </h1>
                        <p className="text-[#406F85] text-xl tracking-wide md:w-[50%] w-full text-center md:text-left">
                            Properties for Buy & sell Successfully
                        </p>
                    </div>
                    <div className="first bg-[#FFF9F5] flex flex-col gap-y-5 md:items-start items-center">
                        <div className="imglogo bg-white  p-5 w-fit rounded-full">
                            <img src={fire} alt="" className="w-7 h-7 " />
                        </div>
                        <h1 className="font-bold text-4xl tracking-wide">
                            500
                        </h1>
                        <p className="text-[#406F85] text-xl tracking-wide md:w-[50%] w-full text-center md:text-left">
                            Daily completed transactions
                        </p>
                    </div>
                    <div className="first bg-[#FFF9F5] flex flex-col gap-y-5 md:items-start items-center">
                        <div className="imglogo bg-white  p-5 w-fit rounded-full">
                            <img src={smile} alt="" className="w-7 h-7 " />
                        </div>
                        <h1 className="font-bold text-4xl tracking-wide">
                            600+
                        </h1>
                        <p className="text-[#406F85] text-xl tracking-wide md:w-[50%] w-full text-center md:text-left">
                            Regular Clients
                        </p>
                    </div>
                </div>
            </div>
            <div className="section-2 mt-20 xl:mx-44 md:mx-20 text-center md:text-justify">
                <div className="content   px-10   text-center 2xl:text-left">
                    <div className="one mb-10">
                        <h1 className="font-bold text-4xl ">
                            A note from our founders.
                        </h1>
                        <p className="text-lg text-gray-600 py-5  text-center 2xl:text-left 2xl:w-[50%] ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem, ipsum dolor.
                        </p>
                    </div>
                    <div className="two flex gap-20 flex-col-reverse 2xl:flex-row items-center">
                        <div className="content flex flex-col w-[100%] lg:w-[50%]">
                            <div className="two-con  flex gap-2  items-start lg:gap-10">
                                <div className="num text-xl font-bold border-2 h-9 border-black rounded-md hidden lg:block">
                                    1
                                </div>
                                <div className="con">
                                    <h1 className="head text-3xl font-bold tracking-wide">
                                        It all started in 1995
                                    </h1>
                                    <p className="py-4 tracking-wide text-lg text-[#626262]">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. In a
                                        free hour, On the other hand, we
                                        denounce with righteous indignation and
                                        dislike men who are so beguiled and
                                        demoralized by the charms of pleasure of
                                        the moment.
                                    </p>
                                </div>
                            </div>
                            <div className="two-con  flex gap-10  items-start">
                                <div className="num text-xl font-bold border-2 h-9 border-black rounded-md hidden lg:block">
                                    2
                                </div>
                                <div className="con">
                                    <h1 className="head text-3xl font-bold tracking-wide">
                                        Donate launches in 2007
                                    </h1>
                                    <p className="py-4 tracking-wide text-lg text-[#626262]">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. In a
                                        free hour, On the other hand, we
                                        denounce with righteous indignation and
                                        dislike men who are so beguiled and
                                        demoralized by the charms of pleasure of
                                        the moment.
                                    </p>
                                </div>
                            </div>
                            <div className="two-con  flex gap-10  items-start">
                                <div className="num text-xl font-bold border-2 h-9 border-black rounded-md hidden lg:block">
                                    3
                                </div>
                                <div className="con">
                                    <h1 className="head text-3xl font-bold tracking-wide">
                                        Relasto holds its initial public
                                        offering in 2008
                                    </h1>
                                    <p className="py-4 tracking-wide text-lg text-[#626262]">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. In a
                                        free hour, On the other hand, we
                                        denounce with righteous indignation and
                                        dislike men who are so beguiled and
                                        demoralized by the charms of pleasure of
                                        the moment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="two-img w-[80%] lg:w-[50%]">
                            <img src={person} alt="" />
                        </div>
                    </div>
                </div>
                <div className="vision mt-32 flex-col flex gap-20 items-center lg:flex-row">
                    <div className="img w-[80%] lg:w-[50%]">
                        <img src={vision} alt="" />
                    </div>
                    <div className="content w-[80%] lg:w-[50%]">
                        <h1 className="font-bold text-4xl py-5">
                            Our vision is simple.
                        </h1>
                        <p className="text-[#406F85] text-xl tracking-wide">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. In a free hour, On the other
                            hand, we denounce with righteous indignation and
                            dislike men who are so beguiled and demoralized by
                            the charms of pleasure of the moment. In a free
                            hour, On the other hand, we denounce with righteous
                            indignation and dislike men .
                        </p>
                        <h3 className="font-semibold text-lg text-[#406F85] py-5">
                            Kausar Pial
                        </h3>
                        <h3 className="font-semibold text-lg text-[#406F85] py-1">
                            CEO at Static Mania
                        </h3>
                    </div>
                </div>
                <div className="askg-members">
                    <h1 className="font-bold text-4xl text-center pt-20 pb-10">
                        ASKG Team Members
                    </h1>
                    <div className="img flex flex-col gap-y-5 items-center sm:grid sm:justify-items-center sm:grid-cols-2  sm:grid-rows-1 sm:gap-4 lg:flex lg:flex-row lg:justify-center lg:gap-5 mx-5">
                        <div className="img-cont">
                            <img
                                src={a}
                                alt=""
                                className="w-[282px] h-[282px]"
                            />
                            <h1 className="text-xl font-semibold">Abhiram</h1>
                            <p className="text-lg">CEO</p>
                        </div>
                        <div className="img-cont">
                            <img
                                src={s}
                                alt=""
                                className="w-[282px] h-[282px]"
                            />
                            <h1 className="text-xl font-semibold">Sathwik</h1>
                            <p className="text-lg">President of Sales</p>
                        </div>
                        <div className="img-cont">
                            <img
                                src={k}
                                alt=""
                                className="w-[282px] h-[282px]"
                            />
                            <h1 className="text-xl font-semibold">Karthik</h1>
                            <p className="text-lg">Marketing Coordinator</p>
                        </div>
                        <div className="img-cont">
                            <img
                                src={g}
                                alt=""
                                className="w-[282px] h-[282px]"
                            />
                            <h1 className="text-xl font-semibold">
                                GopiCharan
                            </h1>
                            <p className="text-lg">Chairman</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastsession bg-[#191919] mt-20 ">
                <div className="realinside xl:mx-52 text-white lg:mx-40 md:mx-24">
                    <div className="headers flex md:justify-between items-center py-5 flex-col md:flex-row gap-5">
                        <div className="font-bold text-2xl md:text-4xl">
                            News & Consult
                        </div>
                        <div className="text-[#FD650B] flex items-center gap-3 text-lg md:text-xl">
                            Explore All
                            <img src={right} alt="" />
                        </div>
                    </div>
                    <div className="cards w-full flex lg:flex-row gap-8 py-5  flex-col ">
                        <div className="card flex flex-col items-center lg:block px-4">
                            <img
                                src={img1}
                                alt=""
                                className="w-3/4 lg:w-auto"
                            />
                            <h5 className="font-semibold   py-2 text-center md:text-left md:text-xl ">
                                9 Easy-to-Ambitious DIY Projects to Improve Your
                                Home
                            </h5>
                            <button className="flex items-center gap-4 text-[#FD650B]  md:text-lg font-semibold">
                                Read the Article
                                <img src={right} alt="" />
                            </button>
                        </div>
                        <div className="card flex flex-col items-center lg:block px-4">
                            <img
                                src={img2}
                                alt=""
                                className="w-3/4 lg:w-auto"
                            />
                            <h5 className="font-semibold   py-2 text-center md:text-left md:text-xl">
                                9 Easy-to-Ambitious DIY Projects to Improve Your
                                Home
                            </h5>
                            <button className="flex items-center gap-4 text-[#FD650B] md:text-lg font-semibold">
                                Read the Article
                                <img src={right} alt="" />
                            </button>
                        </div>
                        <div className="card flex flex-col items-center lg:block px-4">
                            <img
                                src={img3}
                                alt=""
                                className="w-3/4 lg:w-auto"
                            />
                            <h5 className="font-semibold l py-2 text-center md:text-left md:text-xl">
                                9 Easy-to-Ambitious DIY Projects to Improve Your
                                Home
                            </h5>
                            <button className="flex items-center gap-4 text-[#FD650B] md:text-lg font-semibold">
                                Read the Article
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sub bg-[#C0C0C0] xl:mx-52 my-20 rounded-lg lg:mx-40 md:mx-32 sm:mx-20 mx-10">
                <div className="content text-center py-5 ">
                    <h1 className="text-3xl font-semibold">
                        {" "}
                        For Recent Update, News.
                    </h1>
                    <p className="sm:w-[50%] tracking-wide text-lg py-3 mx-auto w-full">
                        {" "}
                        We helps businesses customize, automate and scale up
                        their ad production and delivery
                    </p>
                    <div className="input flex justify-center gap-2 sm:flex-row flex-col items-center">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="p-2 rounded-md w-[50%]"
                        />
                        <button className="py-2 px-4 bg-[black] text-white rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="black bg-[#191919] w-full h-[10vw]" ></div>
            </div>
            </div>

            
            <Footer />
        </div>
    );
};

export default AboutUs;
