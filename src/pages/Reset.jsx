import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import alert from "../assets/alert.png";
import eye from "../assets/eye.svg";
import crossed from "../assets/crossed.svg";
import blackchecked from "../assets/blackchecked.png";
import { Link } from "react-router-dom";

const Reset = () => {
    const imgRef = useRef();
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
        console.log(data);
        let response = await fetch("http://localhost:3000/createaccount", {
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

    return (
        <div className="p-5">
            <div className="main max-w-[400px] mx-auto border-2 border-slate-300 rounded-md mt-20 p-5">
                <div className="title  ">
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="font-bold text-4xl ">Reset Password</h1>
                        <div className="bg-black size-7"></div>
                    </div>
                    <p className="pl-1">
                        Enter the email address associated with your account and
                        we'll send you a link to reset your password.
                    </p>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-[26px] left-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>

                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("mail", {
                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                                minLength: {
                                    value: 3,
                                    message:
                                        "Email must consist of at least 3 characters.",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                    message:
                                        "Please enter a valid email address.",
                                },
                            })}
                            className="border-[1px] py-3 px-10 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500 w-full mt-3 "
                        />
                        {errors.mail && (
                            <span className=" flex gap-2 items-center ml-1 text-sm ">
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

                                {errors.mail.message}
                            </span>
                        )}
                    </div>

                    <input
                        type="submit"
                        value="Get OTP"
                        disabled={isSubmitting}
                        className="font-bold text-white bg-black py-3 px-10 rounded-lg text-lg my-4 cursor-pointer w-full"
                        onClick={tochange}
                    />
                    <Link to={"/login"}>
                    <button className="font-bold  bg-white py-3 px-10 rounded-lg text-lg  cursor-pointer w-full border-2 border-slate-500 shadow-lg">
                      Return to Login Page
                    </button>
                    </Link>
                    {isSubmitSuccessful && visible && (
                        <div className=" flex gap-2 items-center ml-1 justify-center">
                            <img
                                src={blackchecked}
                                alt=""
                                className="size-[16px]"
                            />
                            OTP sent successfully !
                        </div>
                    )}
                </form>
                <div className="line border-b border-gray-400"></div>
                <div className="my-2 text-center text-lg">
                    Don't have an account?{" "}
                    <Link
                        to={"/createaccount"}
                        className="text-black font-bold"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Reset;
