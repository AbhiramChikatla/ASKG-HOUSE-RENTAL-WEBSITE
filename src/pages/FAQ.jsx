import React from "react";
import Navbar from "../components/Navbar";

const FAQ = () => {
    return (
        <div>
            <Navbar />
            <div className="main flex justify-center mt-5 pt-32 bg-[#FFF9F6] flex-col items-center ">
                <div className="title font-bold sm:text-[38px]  text-[30px] text-center">
                    Search Property / Anything
                </div>
                <div className=" py-5 w-full flex justify-center relative items-center ">
                    <input
                        type="text"
                        placeholder="Search Property / Anything"
                        className="w-[70%] h-[60px] sm:px-12 sm:placeholder:font-semibold sm:placeholder:tracking-wide sm:text-lg rounded-lg border-2 border-gray-200 relative px-6 placeholder:font-medium placeholder:tracking-normal text-base "
                    />
                    {/* <img
                        src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_24px_search.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T125408Z&X-Amz-Expires=25200&X-Amz-Signature=a316f2443feec3d18edae6875b7f977d05847d1c63e850aae922ac021a557453&X-Amz-SignedHeaders=host"
                        alt=""
                        className="absolute left-[320px]"
                    /> */}
                    {/* img yet to be implemented in the search bar */}
                </div>
                <div className="result-cont py-5 w-[70%] flex justify-center  items-center  mx-10 bg-white rounded-xl flex-col  ">
                    <div className="result py-2 px-7">
                        <h2 className="text-xl font-medium py-2">
                            {" "}
                            You're viewing sample results.
                        </h2>
                        <span className="text-gray-800">
                            https://relasto.com
                        </span>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Provident facere quod repudiandae quibusdam
                            obcaecati, ducimus tempore explicabo labore
                            repellendus. Ad, minima! Sint nam laboriosam
                            necessitatibus eius provident sunt accusamus
                            aliquid?
                        </p>
                        <div className="line  border-t-2 border-gray-200 mt-4"></div>
                    </div>
                    <div className="result py-2 px-7">
                        <h2 className="text-xl font-medium py-2">
                            {" "}
                            You're viewing sample results.
                        </h2>
                        <span className="text-gray-800">
                            https://relasto.com
                        </span>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Provident facere quod repudiandae quibusdam
                            obcaecati, ducimus tempore explicabo labore
                            repellendus. Ad, minima! Sint nam laboriosam
                            necessitatibus eius provident sunt accusamus
                            aliquid?
                        </p>
                        <div className="line  border-t-2 border-gray-200 mt-4"></div>
                    </div>
                    <div className="result py-2 px-7">
                        <h2 className="text-xl font-medium py-2">
                            {" "}
                            You're viewing sample results.
                        </h2>
                        <span className="text-gray-800">
                            https://relasto.com
                        </span>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Provident facere quod repudiandae quibusdam
                            obcaecati, ducimus tempore explicabo labore
                            repellendus. Ad, minima! Sint nam laboriosam
                            necessitatibus eius provident sunt accusamus
                            aliquid?
                        </p>
                    </div>
                </div>
            </div>
            <div className="empty h-[50vh] bg-[#FFF9F6]">

            </div>
        </div>
    );
};

export default FAQ;
