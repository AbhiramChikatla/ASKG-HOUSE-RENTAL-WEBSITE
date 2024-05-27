import React from "react";
import { Link } from "react-router-dom";
import askgLogo from "../assets/askgLogo.png"


const Footer = () => {
    return (
        <footer className=" mx-16 my-20 text-center">
            <div className="main flex flex-col items-center sm:items-start gap-x-9 lg:justify-evenly lg:flex-row">
                <div className="one">
                    <ul className="w-[260px] flex  items-center flex-col sm:items-start">
                        <li>
                            <div className="logo flex items-center gap-2">
                                <Link to={"/"}>
                                    <img
                                    src={askgLogo}
                                        alt="askg"
                                        className="w-14"
                                    />
                                </Link>
                                <Link to={"/"}>
                                    <span className="text-[#FD650B] text-lg font-semibold">
                                        ASKG
                                    </span>
                                </Link>
                            </div>
                        </li>
                        <li className="my-5 flex flex-col sm:items-start items-center">
                            <div className="font-semibold">
                                59 Bervely Hill Ave, Brooklyn Town,
                            </div>
                            <div className="font-semibold">
                                {" "}
                                New York, NY 5630, CA, US{" "}
                            </div>
                        </li>
                        <li className="my-5 flex flex-col sm:items-start items-center">
                            <div className="font-semibold">
                                {" "}
                                +(889) 726-9435
                            </div>
                            <div className="font-semibold">
                                abhiramchikatla03@gmail.com
                            </div>
                        </li>
                        <li className="flex gap-2 my-5">
                            <img
                                src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_facebook.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T140024Z&X-Amz-Expires=25200&X-Amz-Signature=adc61b4663aa1c874fc986f0dc4bcbe51607498d187abdaedaecc8f62ea3b9e3&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <img
                                src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_twitter.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T140024Z&X-Amz-Expires=25200&X-Amz-Signature=1a6ead4ed8113760293f29627cdf18c6eb1d70a82a0b63bc124ca49f27af95f4&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <img
                                src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_instragram.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T140024Z&X-Amz-Expires=25200&X-Amz-Signature=35b6952f00a90d231604ad840db6001ab19ceb7f34a6cb64cd3df599d0754e43&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <img
                                src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_linked_in.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T140024Z&X-Amz-Expires=25200&X-Amz-Signature=0ef72a2e3eb0513f45e7f40962fd99891a1fde6bd2eb056b8f8ed4e8f25dd345&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                            <img
                                src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_youtube.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T140024Z&X-Amz-Expires=25200&X-Amz-Signature=52b6df51db7a31639bd6ddf0bb3200932a27de3268e5b12828fef54cd9a6a0a5&X-Amz-SignedHeaders=host"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                <div className="two">
                    <ul>
                        <li className="font-bold text-lg py-2 ">Features</li>
                        <li className="py-2 font-medium">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="py-2 font-medium">
                            <Link to={"/aboutus"}>About</Link>
                        </li>
                        <li className="py-2 font-medium">
                            <Link to={"/contact"}>Contact Us</Link>
                        </li>
                       
                        {/* yet to implemented */}
                        <li className="py-2 font-medium"> <Link to={"/createaccount"}>Sign In</Link></li>
                    </ul>
                </div>
                <div className="three">
                    <ul>
                        <li className="font-bold text-lg py-2 ">Information</li>
                        <li className="py-2 font-medium">
                            <Link to={"/listing"}>Listing</Link>
                        </li>

                        <li className="py-2 font-medium">
                            <Link to={"/propertydetails"}>Property Details</Link>
                        </li>
                        <li className="py-2 font-medium">
                            <Link to={"/agent"}>Agent List</Link>
                        </li>
                        <li className="py-2 font-medium">
                            <Link to={"/agentprofile"}>Agent Profile</Link>
                        </li>
                    </ul>
                </div>
                <div className="four">
                    <ul>
                        <li className="font-bold text-lg py-2 ">
                            Documentation
                        </li>
                        <li className="py-2 font-medium">
                        <Link to={"/blog"}>Blog</Link>
                        </li>
                        <li className="py-2 font-medium">
                        <Link to={"/faq"}>FAQ</Link>
                        </li>
                        <li className="py-2 font-medium">
                        <Link to={"/privacypolicy"}>Privacy Policy</Link>
                        </li>
                        <li className="py-2 font-medium">
                        <Link to={"/license"}>License</Link>
                        </li>
                    </ul>
                </div>
                <div className="five">
                    {" "}
                    <ul>
                        <li className="font-bold text-lg py-2 ">
                        </li>
                        <li className="py-2 font-medium"> 
                        <Link to={"/login"}>Log in</Link>
                        </li>
                        <li className="py-2 font-medium"> 
                        <Link to={"/enterotp"}>Enter OTP</Link>
                        </li>
                        <li className="py-2 font-medium"> 
                        <Link to={"/newpassword"}>New Password</Link>
                        </li>
                        <li className="py-2 font-medium"> 
                        <Link to={"/reset"}>Reset Password</Link>
                        </li>
                        <li className="py-2 font-medium">
                        <Link to={"/createaccount"}>Create  Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <span> © 2024. All rights reserved. </span>
        </footer>
    );
};

export default Footer;
