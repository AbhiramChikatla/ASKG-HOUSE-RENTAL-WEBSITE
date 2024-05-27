import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogheader from "../assets/blogheader.png";
import backview from "../assets/backview.png";
import profile from "../assets/profile.png";
import card from "../assets/card.png";
import right from "../assets/right.png";
const BlogDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="actualcontent bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-44 xl:py-20 lg:mx-32 lg:py-10 md:mx-20 md:py-6 sm:mx-16 sm:py-4 mx-10 py-2">
                    <h1 className="font-bold xl:text-4xl tracking-wide lg:text-2xl md:text-xl text-lg">
                        10 Delightful Dining Room Decor Trends for Spring
                    </h1>
                    <img src={blogheader} alt="" className="my-5" />
                    <div className="content text-[#6E6E95] tracking-wide text-lg">
                        What a time we are living in! A lot of things are coming
                        back, bringing back nostalgia. Wondering why I am
                        talking about nostalgia and all? Especially when it is
                        supposed to be an article on websites! Well, because
                        some old famous website technology is coming back too.
                        Yes, I am talking about static websites. Long ago,
                        almost all websites were used to be static sites during
                        the early days of the internet. Then dynamic sites came
                        and blew the space. A lot of websites shifted to it.
                        Obviously dynamic sites have their advantages. But
                        static sites are making a comeback. And it’s coming
                        stronger than before. In this article, you will cover
                        the basics of static websites like what is a static
                        website, what are the advantages, and when you should
                        use a static website. Let’s kick things off.
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
                                Located in a peaceful neighborhood, this house
                                offers convenient access to schools, parks, and
                                shopping centers. Situated in a well-connected
                                area, residents enjoy easy commutes to the city
                                center and nearby amenities.
                            </p>
                        </div>
                        <div className="hcards border-2 border-gray-300 bg-white py-5 px-8 rounded-md my-5">
                            <h1 className="text-xl font-bold tracking-wide">
                                Amenities:{" "}
                            </h1>
                            <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                Featuring modern amenities, this house includes
                                a spacious kitchen, cozy bedrooms, and a
                                backyard perfect for gatherings. Additionally,
                                it offers ample parking space and a laundry area
                                for added convenience.
                            </p>
                        </div>
                        <div className="hcards border-2 border-gray-300 bg-white py-5 px-8 rounded-md my-5">
                            <h1 className="text-xl font-bold tracking-wide">
                                Utilities:
                            </h1>
                            <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                Tenants benefit from included utilities such as
                                water, electricity, and internet, ensuring
                                hassle-free living. With these essential
                                services already set up, residents can focus on
                                enjoying their new home without worrying about
                                additional bills.
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
                            <li className="list-disc">
                                Spacious living room flooded with natural light
                            </li>
                            <li className="list-disc ">
                                Modern kitchen equipped with top-of-the-line
                                appliances
                            </li>
                            <li className="list-disc ">
                                Cozy bedrooms with ample closet space
                            </li>
                            <li className="list-disc ">
                                Luxurious master suite with ensuite bathroom
                            </li>
                            <li className="list-disc ">
                                Private backyard oasis perfect for outdoor
                                entertaining
                            </li>
                        </ul>
                    </div>
                    <div className="links">
                        <h1 className="font-bold  tracking-wide text-2xl mt-20">
                            Links
                        </h1>
                        <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                            Yes, a static website may have all its benefits, but
                            is it suitable for you? That’s a big question. It
                            depends on why you are going to build a website,
                            what purpose it will serve. That’s why you must when
                            you should use a static website. The followings are
                            the common applications where using the static
                            website is the best choice. - Blog sites- - Small
                            business websites - Websites Under-Development -
                            Personal Portfolio sites - Websites that contain
                            basic information
                        </p>
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
                                <tr className="h-[50px] border-b-[1px] text-center text-center">
                                    <td>Rahul Sharma</td>
                                    <td>2024-04-01 to 2024-10-01</td>
                                    <td> rahul.sharma@example.com</td>
                                    <td> +91 98765 43210</td>
                                </tr>
                                <tr className="h-[50px] border-b-[1px] text-center">
                                    <td>Priya Patel</td>
                                    <td>2024-05-15 to 2024-11-15</td>
                                    <td>priya.patel@example.com</td>
                                    <td>+91 98765 67890</td>
                                </tr>
                                <tr className="h-[50px] border-b-[1px] text-center">
                                    <td>Rajesh Singh</td>
                                    <td>2024-03-01 to 2024-09-01</td>
                                    <td>rajesh.singh@example.com</td>
                                    <td>+91 98765 12345</td>
                                </tr>
                                <tr className="h-[50px] border-b-[1px] text-center">
                                    <td>Neha Gupta</td>
                                    <td>2024-06-01 to 2024-12-01</td>
                                    <td>neha.gupta@example.com</td>
                                    <td>+91 98765 54321</td>
                                </tr>
                                <tr className="h-[50px] border-b-[1px] text-center">
                                    <td>Sanju Samson</td>
                                    <td>2024-04-15 to 2024-10-15</td>
                                    <td>Samson.reddy@example.com</td>
                                    <td>+91 98765 98765</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="writer mt-10 ">
                        <h1 className="font-bold  tracking-wide text-2xl my-5 text-center sm:text-left">
                            Written by
                        </h1>
                        <div className="content flex sm:gap-10  items-center sm:flex-row flex-col">
                            <img src={profile} alt="" className="rounded-md size-[100px]" />
                            <div className="first">
                                <h1 className="font-bold  tracking-wide text-xl ">
                                    Kristin Watson
                                </h1>
                                <p className="text-[#6E6E95] tracking-wide text-lg py-2">
                                    Co-founder and CDO
                                </p>
                            </div>
                            <div className="second">
                                <ul>
                                    <li className="list-disc">July 20, 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 my-10">
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full">
                            <img
                                src={card}
                                alt=""
                                className=" h-[350px] w-full lg:w-auto"
                            />
                            <div className="content">
                                <button className="font-bold text-gray-500  border-2 py-1 px-4 rounded-md my-4 hover:text-white hover:bg-black">
                                    Business
                                </button>
                                <h1 className="font-semibold text-2xl tracking-wide">
                                    10 Delightful Dining Room Decor Trends for
                                    Spring
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <ul className="flex gap-5 text-[13px]">
                                        <li> July 20, 2022</li>
                                        <li> 7 min read</li>
                                    </ul>
                                </div>
                                <div className="external flex items-center gap-3 text-[#6E6E6E] font-bold text-lg">
                                    Continue Reading
                                    <img src={right} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full">
                            <img
                                src={card}
                                alt=""
                                className=" h-[350px] w-full lg:w-auto"
                            />
                            <div className="content">
                                <button className="font-bold text-gray-500  border-2 py-1 px-4 rounded-md my-4 hover:text-white hover:bg-black">
                                    Business
                                </button>
                                <h1 className="font-semibold text-2xl tracking-wide">
                                    10 Delightful Dining Room Decor Trends for
                                    Spring
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <ul className="flex gap-5 text-[13px]">
                                        <li> July 20, 2022</li>
                                        <li> 7 min read</li>
                                    </ul>
                                </div>
                                <div className="external flex items-center gap-3 text-[#6E6E6E] font-bold text-lg">
                                    Continue Reading
                                    <img src={right} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full">
                            <img
                                src={card}
                                alt=""
                                className=" h-[350px] w-full lg:w-auto"
                            />
                            <div className="content">
                                <button className="font-bold text-gray-500  border-2 py-1 px-4 rounded-md my-4 hover:text-white hover:bg-black">
                                    Business
                                </button>
                                <h1 className="font-semibold text-2xl tracking-wide">
                                    10 Delightful Dining Room Decor Trends for
                                    Spring
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <ul className="flex gap-5 text-[13px]">
                                        <li> July 20, 2022</li>
                                        <li> 7 min read</li>
                                    </ul>
                                </div>
                                <div className="external flex items-center gap-3 text-[#6E6E6E] font-bold text-lg">
                                    Continue Reading
                                    <img src={right} alt="" />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;
