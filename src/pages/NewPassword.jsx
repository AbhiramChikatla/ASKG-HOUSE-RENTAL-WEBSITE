import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import alert from "../assets/alert.png";
import eye from "../assets/eye.svg";
import crossed from "../assets/crossed.svg";
import blackchecked from "../assets/blackchecked.png";
import { Link } from "react-router-dom";

const NewPassword = () => {
    const imgRef = useRef();
    const img2Ref = useRef();
    const [visible, setVisible] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();
    const onSubmit = async (data) => {
        reset();
        let response = await fetch("http://localhost:3000/newpassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let content = await response.text();

        console.log(content);
    };
    function tochange() {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
        setVisible(true);
    }
    const handleImg = (e) => {
        if (e.target.src.includes("eye")) {
            imgRef.current.src = crossed;
            e.target.previousSibling.type = "text";
        } else {
            imgRef.current.src = eye;
            e.target.previousSibling.type = "password";
        }
    };
    const handleImg2 = (e) => {
        if (e.target.src.includes("eye")) {
            img2Ref.current.src = crossed;
            e.target.previousSibling.type = "text";
        } else {
            img2Ref.current.src = eye;
            e.target.previousSibling.type = "password";
        }
    };

    return (
        <div className="p-5">
            <div className="main max-w-[400px] mx-auto border-2 border-slate-300 rounded-md mt-20 p-5">
                <div className="title flex justify-between items-center">
                    <div>
                        <h1 className="font-bold text-4xl ">New Password</h1>
                        <p className="mb-2"> Enter your new password</p>
                    </div>
                    <div className="bg-black size-8"></div>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="relative mb-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-6 left-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                            />
                        </svg>

                        <input
                            type="password"
                            placeholder="Old Password"
                            {...register("oldpassword", {
                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                                minLength: {
                                    value: 3,
                                    message:
                                        "Password must consist of at least 3 characters.",
                                },
                            })}
                            className="border-[1px] py-3 px-10 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500 w-full mt-2 "
                        />
                        <img
                            src={eye}
                            ref={imgRef}
                            alt=""
                            className="size-6 absolute right-2 bottom-[18px] cursor-pointer"
                            onClick={handleImg}
                        />
                       
                    </div>
                    {errors.oldpassword && (
                        <span className=" flex gap-2 items-center ml-1 text-sm mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                />
                            </svg>
                            {errors.oldpassword.message}
                        </span>
                    )}
                    <div className="relative mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-6 left-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                            />
                        </svg>

                        <input
                            type="password"
                            placeholder="New Password"
                            {...register("newpassword", {
                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                                minLength: {
                                    value: 3,
                                    message:
                                        "Password must consist of at least 3 characters.",
                                },
                            })}
                            className="border-[1px] py-3 px-10 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500 w-full mt-2 "
                        />
                        <img
                            src={eye}
                            ref={img2Ref}
                            alt=""
                            className="size-6 absolute right-2 bottom-[18px] cursor-pointer"
                            onClick={handleImg2}
                        />
                    </div>

                    {errors.newpassword && (
                        <span className=" flex gap-2 items-center ml-1 text-sm m">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                />
                            </svg>
                            {errors.newpassword.message}
                        </span>
                    )}
                    <input
                        type="submit"
                        value="Update Password"
                        disabled={isSubmitting}
                        className="font-bold text-white bg-black py-3 px-10 rounded-lg text-lg my-5 cursor-pointer w-full"
                        onClick={tochange}
                    />
                    {isSubmitSuccessful && visible && (
                        <div className=" flex gap-2 items-center ml-1   justify-center">
                            <img
                                src={blackchecked}
                                alt=""
                                className="size-[16px]"
                            />
                            Password Updated Successfully
                        </div>
                    )}
                </form>
                <div className="line border-b border-gray-400"></div>
                <div className="my-2 text-center text-lg">
                    Remember the password? {" "}
                    <Link to={"/login"} className="text-black font-bold">
                        Log in 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;
