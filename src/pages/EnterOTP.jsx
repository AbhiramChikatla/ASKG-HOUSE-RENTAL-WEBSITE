import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const EnterOTP = () => {

    
    const handleSubmit = (e) => {
      e.preventDefault();

    };
   

    return (
        <div className="p-5">
            <div className="main max-w-[400px] mx-auto border-2 border-slate-300 rounded-md mt-20 p-5">
                <div className="title  ">
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="font-bold text-4xl ">Enter OTP</h1>
                        <div className="bg-black size-7"></div>
                    </div>
                    <p className="pl-1">
                        Please check your mail, We sent an OTP code
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
















                    <input
                        type="submit"
                        className="border-[1px] py-3 px-10 rounded-md border-gray-400 my-2 w-full mt-3 bg-black text-white font-bold"
                    />
                    <button className="font-bold  bg-white py-3 px-10 rounded-lg text-lg  cursor-pointer w-full border-2 border-slate-500 shadow-lg">
                        Request OTP Again
                    </button>
                </form>
                <div className="line border-b border-gray-400"></div>
                <div className="my-2 text-center text-lg">
                    Remember the Password ?{" "}
                    <Link to={"/login"} className="text-black font-bold">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EnterOTP;
