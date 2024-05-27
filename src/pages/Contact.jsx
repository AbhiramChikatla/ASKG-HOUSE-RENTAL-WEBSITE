import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mail from "../assets/mail.png";
import telephone from "../assets/telephone.png";
import stack from "../assets/stackoverflow.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import alert from "../assets/alert.png";
import checked from "../assets/checked.png"

import { useForm } from "react-hook-form";


const Contact = () => {
    const [visible, setVisible] = useState(true)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();

        function tochange() {
            setTimeout(() => {
                setVisible(false)
            }, 2000);
            setVisible(true)
        }


    const onSubmit = async (data) => {
        // console.log(data);
        reset();
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let content = await response.text();
        console.log(content, response);
    };
    return (
        <div>
            <Navbar />
            <div className="actual-content bg-[#FFF9F6] mt-5">
                <div className="forcolor  md:mx-48 md:py-20 mx-20 py-10">
                    <div className="info text-center">
                        <h1 className="font-bold text-5xl tracking-wide py-4">
                            Get in Touch
                        </h1>
                        <p className="tracking-wide text-lg text-[#6E6E6E] font-semibold">
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment,
                            so blinded by desire, that they cannot foresee the
                            pain and trouble.
                        </p>
                    </div>
                </div>
                <div
                    className="contact-session  rounded-lg bg-white flex justify-between items-center xl:px-10 xl:mx-48 xl:my-10 xl:gap-16 xl:py-10 flex-col xl:flex-row
                lg:mx-32 md:mx-24 sm:mx-4
                
                "
                >
                    <div className="form xl:w-[50%] w-[80%]">
                        <h1 className="font-bold text-3xl tracking-wide py-4 text-center">
                            Send a message
                        </h1>
                        <form
                            action=""
                            className="flex flex-col"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                    minLength: {
                                        value: 3,
                                        message:
                                            "The username must consist of at least 3 characters.",
                                    },
                                })}
                                className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500 "
                            />
                            {errors.name && (
                                <span className="text-red-600 flex gap-2 items-center">
                                    <img
                                        src={alert}
                                        alt=""
                                        className="size-4"
                                    />
                                    {errors.name.message}
                                </span>
                            )}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-600 flex gap-2 items-center">
                                    <img
                                        src={alert}
                                        alt=""
                                        className="size-4"
                                    />
                                    {errors.email.message}
                                </span>
                            )}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Enter a correct Phone number",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Enter a correct Phone number",
                                    },
                                })}
                            />
                            {errors.phone && (
                                <span className="text-red-600 flex gap-2 items-center">
                                    <img
                                        src={alert}
                                        alt=""
                                        className="size-4"
                                    />
                                    {errors.phone.message}
                                </span>
                            )}
                            <textarea
                                className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500"
                                name="msg"
                                id="msg"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                                {...register("msg", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                    minLength: {
                                        value: 2,
                                        message:
                                            "Your message must be longer than two characters",
                                    },
                                })}
                            ></textarea>
                            {errors.msg && (
                                <span className="text-red-600 flex gap-2 items-center">
                                    <img
                                        src={alert}
                                        alt=""
                                        className="size-4"
                                    />
                                    {errors.msg.message}
                                </span>
                            )}
                            <input
                                type="submit"
                                value="Send Request"
                                disabled={isSubmitting}
                                className="font-bold text-white bg-black py-3 px-10 rounded-lg text-lg my-5 cursor-pointer"
                                onClick={tochange}
                            />
                            {(isSubmitSuccessful && visible) &&
                                  (  <span className=" flex gap-2 items-center text-green-600">
                                        <img src={checked} alt="" className="size-[16px]"/>

                                        Message sent successful
                                    </span>)}
                        </form>
                    </div>
                    <div className="borderline xl:border-r-[1px] border-gray-700 xl:h-[100vh] w-[50vw] border-t-[1px] xl:w-0 my-5"></div>
                    <div className="cont-info xl:w-[50%] w-[80%]">
                        <h2 className="font-semibold text-xl">
                            Office Address
                        </h2>
                        <p className="font-semibold text-lg text-gray-500 tracking-wide ">
                            1421 San Pedro St, Los Angeles,
                        </p>
                        <p className="font-semibold text-lg text-gray-500 tracking-wide ">
                            CA 90015
                        </p>
                        <p className="flex gap-4 py-2 font-semibold text-lg text-gray-500 tracking-wide">
                            <img src={telephone} alt="" />
                            (889) 726-9435
                        </p>
                        <p className="flex gap-4 py-2 font-semibold text-lg text-gray-500 tracking-wide">
                            <img src={mail} alt="" />
                            abhiramchikatla03@mail.com
                        </p>
                        <h2 className="pt-10 font-semibold text-lg text-gray-900 tracking-wide">
                            Social
                        </h2>
                        <div className="icons flex gap-4 pt-4 mb-10">
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={twitter} alt="" />
                            <img src={youtube} alt="" />
                            <img src={stack} alt="" />
                        </div>
                    </div>
                </div>
                <div className="extra w-full h-20 hidden md:block"></div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
