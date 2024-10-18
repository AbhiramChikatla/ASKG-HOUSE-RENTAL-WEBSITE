import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogheader from "../assets/blogheader.png";
import backview from "../assets/backview.png";
import profile from "../assets/profile.png";
import { useParams } from "react-router-dom";
import { backendUrl } from "../context/userContext";
const BlogDetails = () => {
    const [blog, setBlog] = useState([]);
    const { id } = useParams();
    const fetchBlogData = async () => {
        let response = await fetch(`${backendUrl}/blogdetails/${id}`);
        let content = await response.json();
        setBlog(content);
    };
    useEffect(() => {
        fetchBlogData();
    }, [id]);

    return (
        <div>
            <Navbar />
            <div className="actualcontent bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-44 xl:py-20 lg:mx-32 lg:py-10 md:mx-20 md:py-6 sm:mx-16 sm:py-4 mx-10 py-2">
                    <h1 className="font-bold xl:text-4xl tracking-wide lg:text-2xl md:text-xl text-lg">
                        {blog.title}
                    </h1>
                    <img src={blogheader} alt="" className="my-5" />
                    <div className="content text-[#6E6E95] tracking-wide text-lg">
                        {blog.description}
                    </div>
                    <div className="blockquotes">
                        <h1 className="font-bold  tracking-wide text-2xl mt-20">
                            Blockquotes
                        </h1>
                        <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                            Blockquotes can be nested. Add a in front of the
                            paragraph you want to nest.
                        </p>
                    </div>
                    <div className="hcontainer flex flex-col gap-x-5">
                        <div className="hcards border-2 border-gray-300 bg-white py-5 px-8 rounded-md my-5">
                            <h1 className="text-xl font-bold tracking-wide">
                                Location:
                            </h1>
                            <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                {blog.location}
                            </p>
                        </div>
                        <div className="hcards border-2 border-gray-300 bg-white py-5 px-8 rounded-md my-5">
                            <h1 className="text-xl font-bold tracking-wide">
                                Amenities:{" "}
                            </h1>
                            <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                {blog.amenities}
                            </p>
                        </div>
                        <div className="hcards border-2 border-gray-300 bg-white py-5 px-8 rounded-md my-5">
                            <h1 className="text-xl font-bold tracking-wide">
                                Utilities:
                            </h1>
                            <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                {blog.utilities}
                            </p>
                        </div>
                    </div>
                    <div className="siteimages">
                        <h1 className="font-bold  tracking-wide text-2xl mt-20">
                            Images
                        </h1>
                        <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                            Step into the spacious living room flooded with
                            natural light, perfect for relaxation and
                            entertainment. With comfortable seating and tasteful
                            decor, this inviting space sets the tone for cozy
                            gatherings and leisurely evenings. Step outside to
                            the spacious backyard, an oasis of greenery and
                            relaxation. Perfect for outdoor dining, gardening,
                            or simply basking in the sun, this tranquil retreat
                            extends your living space and offers endless
                            possibilities for outdoor enjoyment.
                        </p>
                        <img src={backview} alt="" className="py-5" />
                    </div>
                    <div className="metainfo">
                        <h1 className="font-bold  tracking-wide text-2xl mt-20">
                            Features
                        </h1>
                        <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                            Discover the epitome of modern living with this
                            meticulously designed house. Boasting an array of
                            features, this residence offers unparalleled comfort
                            and convenience. From the sleek kitchen with
                            top-of-the-line appliances to the spacious living
                            areas flooded with natural light, every detail has
                            been thoughtfully crafted to elevate your lifestyle.
                            Enjoy the tranquility of the private backyard oasis,
                            perfect for entertaining or quiet relaxation. With
                            its impeccable blend of style and functionality,
                            this house truly redefines luxurious living.
                        </p>
                        <ul className="text-[#6E6E95] tracking-wide text-xl py-5 mx-10">
                            {blog.features?.map((item, ind) => (
                                <li className="list-disc" key={ind}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="links">
                        <h1 className="font-bold  tracking-wide text-2xl mt-20">
                            Links
                        </h1>
                        <ul className="text-[#6E6E95] tracking-wide text-xl py-5 mx-10">
                            {blog.links?.map((item, ind) => (
                                <li
                                    className="list-disc cursor-pointer text-blue-700 underline"
                                    key={ind}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tables hidden lg:block">
                        <h1 className="font-bold  tracking-wide text-2xl mt-20">
                            History
                        </h1>
                        <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                            The followings are the common applications where
                            using the static website is the best choice. - Blog
                            sites- - Small business websites
                        </p>
                    </div>
                    <div className="history border-2 border-[#D6D6D6] rounded-lg bg-white hidden lg:block">
                        <table className="w-full">
                            <thead className="text-center">
                                <tr className="py-2 text-center">
                                    <th className="h-[50px]">Full Name</th>
                                    <th className="h-[50px]">Date</th>
                                    <th className="h-[50px]">Email Address</th>
                                    <th className="h-[50px]">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blog.history?.map((item, ind) => (
                                    <tr className="h-[50px] border-b-[1px]  text-center" key={ind}>
                                        <td >{item?.split(",")[0]}</td>
                                        <td>{item?.split(",")[1]}</td>
                                        <td>{item?.split(",")[2]}</td>
                                        <td>{item?.split(",")[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="writer mt-10 ">
                        <h1 className="font-bold  tracking-wide text-2xl my-5 text-center sm:text-left">
                            Written by
                        </h1>
                        <div className="content flex sm:gap-10  items-center sm:flex-row flex-col">
                            <img
                                src={profile}
                                alt=""
                                className="rounded-md size-[100px]"
                            />
                            <div className="first">
                                <h1 className="font-bold  tracking-wide text-xl ">
                                    {blog.author?.name}
                                </h1>
                                <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                    Co-founder and CDO
                                </p>
                            </div>
                            <div className="second">
                                <ul>
                                    <li className="list-disc">{blog.date?.split("T")[0]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 my-10">
                      
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;
