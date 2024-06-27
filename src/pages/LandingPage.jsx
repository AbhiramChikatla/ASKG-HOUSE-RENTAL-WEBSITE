import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import main_img from "../assets/main_img.png";
import loupe from "../assets/loupe.png";
import eye from "../assets/eye-open.png";
import home from "../assets/home.png";
import happiness from "../assets/happiness.png";
import smile from "../assets/smile.png";
import fire from "../assets/fire.png";
import radio from "../assets/radio.png";
import dollar from "../assets/dollar.png";
import person from "../assets/person.png";
import vision from "../assets/vision.png";
import right from "../assets/right-arrow.png";
import view1 from "../assets/view1.png";
import view2 from "../assets/view2.png";
import view3 from "../assets/view3.png";
import view4 from "../assets/view4.png";
import sideview from "../assets/sideview.png";
import checked from "../assets/check-mark.png";
import quotes from "../assets/straight-quotes.png";
import person1 from "../assets/person1.png";
import arrow from "../assets/arrow.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Slider from "../components/Slider";
import alert from "../assets/alert.png";

import { useForm } from "react-hook-form";
import Review from "../components/Review";

const LandingPage = () => {
    const [visible, setVisible] = useState(true);
    const [reviewdata, setReviewData] = useState([]);
    const [reviewslider, setReviewslider] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();

    const fetchReviewData = async () => {
        let response = await fetch("http://localhost:3000/agents_data");
        let content = await response.json();
        setReviewData(content);
    };
    useEffect(() => {
        fetchReviewData();
    }, []);

    function tochange() {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
        setVisible(true);
    }
    const onSubmitForSub = async (data) => {
        reset();
        let response = await fetch("http://localhost:3000/subscribe_info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let content = await response.text();
        console.log(data);
        console.log(content);
    };
    return (
        <div>
            <Navbar />
            <div className="normal bg-[#FFF7F0]">
                <div className=" actual-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8  px-5 rounded-md my-10 ">
                    <div className="first flex gap-2 items-center justify-between xl:flex-row flex-col  ">
                        <div className="one xl:w-1/2 w-full p-10">
                            <h1 className="xl:text-5xl font-bold tracking-wide py-5 lg:text-3xl text-xl ">
                                Find a perfect property Where you'll love to
                                live
                            </h1>
                            <p className="text-lg font-semibold text-[#6E6E6E]">
                                We helps businesses customize, automate and
                                scale up their ad production and delivery.
                            </p>
                            <div className="form bg-white rounded-md my-5 py-5">
                                <div className="btn flex justify-evenly">
                                    <button className="bg-white py-2 px-5 text-gray-500 rounded-md font-bold border-[1px] border-white hover:border-gray-800">
                                        <Link to={"/"}>Buy</Link>
                                    </button>
                                    <button className="bg-white py-2 px-5 text-gray-500 rounded-md font-bold border-[1px] border-white hover:border-gray-800">
                                        <Link to={"/"}>Sell</Link>
                                    </button>
                                    <button className="bg-white py-2 px-5 text-gray-500 rounded-md font-bold border-[1px] border-white hover:border-gray-800">
                                        <Link to={"/"}>Rent</Link>
                                    </button>
                                </div>
                                <form action="" className="p-5 pb-0">
                                    <input
                                        type="text"
                                        placeholder="City / Street"
                                        className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-3  placeholder:tracking-wide placeholder:text-gray-700 
                                        w-full"
                                    />
                                    <select
                                        name="Property_type"
                                        id="property_type"
                                        className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-3 placeholder:font-semibold placeholder:tracking-wide placeholder:text-gray-500 
                                        w-full"
                                    >
                                        <option
                                            value="Buy"
                                            className="font-semibold tracking-wide text-gray-500 "
                                        >
                                            Property Type
                                        </option>
                                        <option
                                            value="Buy"
                                            className="text-gray-600"
                                        >
                                            Single-family home
                                        </option>
                                        <option
                                            value="initial"
                                            className="text-gray-600"
                                        >
                                            Bungalow
                                        </option>
                                        <option
                                            value="Sell"
                                            className="text-gray-600"
                                        >
                                            Duplex
                                        </option>
                                        <option
                                            value="Rent"
                                            className="text-gray-600"
                                        >
                                            Cottage
                                        </option>
                                        <option
                                            value="Rent"
                                            className="text-gray-600"
                                        >
                                            Townhouse
                                        </option>
                                    </select>
                                    <select
                                        name="Price"
                                        id="price"
                                        className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-3 placeholder:font-semibold placeholder:tracking-wide placeholder:text-gray-500 
                                        w-full"
                                    >
                                        <option
                                            value="Buy"
                                            className="font-semibold tracking-wide text-gray-500 "
                                        >
                                            Price Range
                                        </option>
                                        <option
                                            value="Buy"
                                            className="text-gray-600"
                                        >
                                            ₹ 0- ₹ 5,000
                                        </option>
                                        <option
                                            value="initial"
                                            className="text-gray-600"
                                        >
                                            ₹ 5,000- ₹ 6,000
                                        </option>
                                        <option
                                            value="Sell"
                                            className="text-gray-600"
                                        >
                                            ₹ 5,000- ₹ 10,000
                                        </option>
                                        <option
                                            value="Rent"
                                            className="text-gray-600"
                                        >
                                            ₹ 10,000- ₹ 15,000
                                        </option>
                                        <option
                                            value="Rent"
                                            className="text-gray-600"
                                        >
                                            ₹ 15,000- ₹ 20,000
                                        </option>
                                    </select>

                                    <input
                                        type="submit"
                                        value="Search"
                                        className="font-bold text-white bg-black py-3  rounded-lg text-lg my-5 cursor-pointer w-full hover:text-gray-600"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="two xl:w-1/2 w-full p-10">
                            <img src={main_img} alt="" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="normal bg-white py-7 ">
                    <div className=" actual-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8  px-5 rounded-md my-10 ">
                        <div className="second flex gap-7 flex-col lg:flex-row ">
                            <div className="one bg-[#FFE0CE] rounded-md p-10 xl:w-1/2 w-full">
                                <h1 className="text-3xl font-bold tracking-wide py-5 ">
                                    Simple & Easy way to find your dream
                                    Appointment
                                </h1>
                                <p className="tracking-wide text-lg text-[#6E6E6E]  py-5">
                                    Discover your dream appointment effortlessly
                                    with our intuitive platform, connecting you
                                    with ideal opportunities in just a few
                                    clicks.
                                </p>
                                <button className="bg-black py-2 px-5 text-white rounded-md font-bold">
                                    <Link to={"/listing"}>Get Started</Link>
                                </button>
                            </div>
                            <div className="two grid sm:grid-cols-2 gap-5 xl:w-1/2 w-full grid-cols-1 ">
                                <div className="element bg-[#FBEEE6] rounded-xl p-5">
                                    <img src={loupe} alt="" />
                                    <h1 className="text-2xl font-semibold tracking-wide py-5 ">
                                        Search your location
                                    </h1>
                                </div>
                                <div className="element bg-[#FBEEE6] rounded-xl p-5">
                                    <img src={eye} alt="" />
                                    <h1 className="text-2xl font-semibold tracking-wide py-5 ">
                                        Visit Appointment
                                    </h1>
                                </div>
                                <div className="element bg-[#FBEEE6] rounded-xl p-5">
                                    <img src={home} alt="" />
                                    <h1 className="text-2xl font-semibold tracking-wide py-5 ">
                                        Get your dream house
                                    </h1>
                                </div>
                                <div className="element bg-[#FBEEE6] rounded-xl p-5">
                                    <img src={happiness} alt="" />
                                    <h1 className="text-2xl font-semibold tracking-wide py-5 ">
                                        Enjoy your Appointment
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bck bg-[#FFF9F5] ">
                    <div className="ratings mt-20 xl:mx-44 mx-20 flex justify-evenly py-2  flex-col items-center md:flex-row gap-20 xl:gap-5">
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
            </div>
            <div className="container-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8  px-5 rounded-md my-10">
                <Slider />
            </div>
            <div className="bck bg-[#FFF9F5] ">
                <div className="viewdetails-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8  px-5 rounded-md my-10 bg-[#FFF9F6]">
                    <div className="one flex items-center   flex-col lg:flex-row ">
                        <div className="one-one lg:w-1/2 p-10 w-full">
                            <h1 className="text-3xl font-bold tracking-wide py-5 ">
                                Simple & Easy way to find your dream Appointment
                            </h1>

                            <p className="text-lg font-semibold text-[#6E6E6E]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. In a free hour, when
                                our power of choice is untrammelled and when
                                nothing prevents our being able to do what we
                                like best, every pleasure is to be welcomed.
                            </p>
                            <button className="bg-black py-2 px-5 text-white rounded-md font-bold border-[1px] border-white hover:border-gray-800 mt-5">
                                <Link to={"/"}>Get Started</Link>
                            </button>
                        </div>
                        <div className="one-two lg:w-1/2 p-10 w-full flex justify-center">
                            <div className="images flex md:gap-5 gap-2">
                                <div className="imgone flex md:gap-5 flex-col gap-2">
                                    <img
                                        src={view3}
                                        alt=""
                                        className="w-[270px] h-[330px] object-cover"
                                    />
                                    <img
                                        src={view1}
                                        alt=""
                                        className="w-[270px] h-[220px] object-cover"
                                    />
                                </div>
                                <div className="imgtwo md:gap-5 flex flex-col gap-2">
                                    <img
                                        src={view2}
                                        alt=""
                                        className="w-[270px] h-[220px] object-cover"
                                    />
                                    <img
                                        src={view4}
                                        alt=""
                                        className="w-[270px] h-[330px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="two flex mt-10 flex-col lg:flex-row items-center">
                        <div className="two-one lg:w-1/2 p-10 w-full flex justify-center">
                            <div className="images ">
                                <img src={sideview} alt="" />
                            </div>
                        </div>
                        <div className="two-two lg:w-1/2 p-10 w-full ">
                            <h1 className="text-3xl font-bold tracking-wide py-5 ">
                                Simple & Easy way to find your dream Appointment
                            </h1>

                            <p className="text-lg font-semibold text-[#6E6E6E]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. In a free hour, when
                                our power of choice is untrammelled and when
                                nothing prevents our being able to do what we
                                like best, every pleasure is to be welcomed.
                            </p>
                            <ul className="my-5">
                                <li className="flex gap-2 items-center py-2">
                                    <img src={checked} alt="" />
                                    <span className="font-semibold text-lg`">
                                        Find Excellent deals
                                    </span>
                                </li>
                                <li className="flex gap-2 items-center py-2">
                                    <img src={checked} alt="" />
                                    <span className="font-semibold text-lg`">
                                        Friendly host & Fast support
                                    </span>
                                </li>
                                <li className="flex gap-2 items-center py-2">
                                    <img src={checked} alt="" />
                                    <span className="font-semibold text-lg`">
                                        Secure payment system
                                    </span>
                                </li>
                            </ul>
                            <button className="bg-black py-2 px-5 text-white rounded-md font-bold border-[1px] border-white hover:border-gray-800 mt-5 hover:text-gray-400">
                                <Link to={"/"}>Learn More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last ">
                {/* <div className="container-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8  px-5 rounded-md my-10 overflow-hidden  flex">  */}

                <div className="container-content xl:mx-40  lg:mx-28  md:mx-16 sm:mx-8  px-5 rounded-md my-10 overflow-hidden   flex ">
                    {reviewdata.map((item, index) => {
                        return (
                            <Review
                                key={item._id}
                                name={item.full_name}
                                designation={item.designation}
                                company={item.company}
                                desc={item.reviews}
                                style={{
                                    transform: `translateX(-${
                                        100 * reviewslider
                                    }%)`,
                                }}
                                data={reviewdata}
                            />
                        );
                    })}
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
                    <div className="content text-center py-5 px-2">
                        <h1 className="text-3xl font-semibold">
                            {" "}
                            For Recent Update, News.
                        </h1>
                        <p className="sm:w-[50%] tracking-wide text-lg py-3 mx-auto w-full">
                            {" "}
                            We helps businesses customize, automate and scale up
                            their ad production and delivery
                        </p>
                        <form
                            className="input flex justify-center gap-2 sm:flex-row flex-col items-center"
                            action=""
                            onSubmit={handleSubmit(onSubmitForSub)}
                        >
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="p-2 rounded-md w-[50%]"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },

                                    pattern: {
                                        value: /^[^@]+@\w+([.-]\w+)*.\w{2,4}$/,
                                        message:
                                            "Please enter a valid email address",
                                    },
                                })}
                            />

                            <input
                                type="submit"
                                className="py-2 px-4 bg-[black] text-white rounded-md"
                                value={"Subscribe"}
                                disabled={isSubmitting}
                                onClick={tochange}
                            />
                        </form>
                        <div className="flex justify-center my-4  ">
                            {isSubmitSuccessful && visible && (
                                <span className=" flex gap-2 items-center text-[#32BA7C]">
                                    <img
                                        src="img/checked.png"
                                        alt=""
                                        className="size-[16px]"
                                    />
                                    Subscribed Successfully
                                </span>
                            )}
                            {errors.email && (
                                <span className="text-[#FF1F1F] flex gap-2 items-center justify-start">
                                    <img
                                        src={alert}
                                        alt=""
                                        className="size-4"
                                    />
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="black bg-[#191919] w-full h-[10vw]"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
