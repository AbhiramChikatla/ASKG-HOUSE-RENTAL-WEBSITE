import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import prp1 from "../assets/prp1.png";
import prp2 from "../assets/prp2.png";
import prp3 from "../assets/prp3.png";
import aling from "../assets/aling.png";
import checked from "../assets/checked.png";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import agent from "../assets/agent.png";
import env from "../assets/envelope.png";
import phonecall from "../assets/telephone.png";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import { userContext } from "../context/userContext";
import { differenceInCalendarDays } from "date-fns";

const PropertyDetails = () => {
    const [visible, setVisible] = useState(true);
    const [property, setProperty] = useState([]);
    const { LoginUser } = useContext(userContext);
    const [user, SetUser] = useState("");
    const [days,SetDays]=useState(1);
    
    const { id } = useParams();



    // to fetch the property
    const fetchData = async () => {
        let response = await fetch(
            "https://askg-api.vercel.app/propertydetails/" + id
        );
        let content = await response.json();
        setProperty(content);
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        if (LoginUser) {
            SetUser(LoginUser.username);
        }
    }, [LoginUser]);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();
    function tochange() {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
        setVisible(true);
    }

    const onSubmit = async (data) => {
        // console.log(data);
        const {startDate,endDate}=data;
        let days=differenceInCalendarDays(endDate,startDate)
        SetDays(days);
        confirm(`Do you want to book this place for ${days*property.price}`)
        console.log("Login User is",LoginUser)
        
        reset();
        data={...data,bookedHouse:id,email:LoginUser.email,totalAmount:days*property.price,}

        let response = await fetch("https://askg-api.vercel.app/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let content = await response.json();
        console.log(content);
    };
    return (
        <div>
            <Navbar />
            <div className="main bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-40 xl:py-20 lg:mx-28 lg:py-10 md:mx-16 md:py-6 sm:mx-8 sm:py-4 mx-5 py-2">
                    <div className="images flex gap-5 justify-center items-center flex-col lg:flex-row gap-y-10">
                        <div className="one">
                            <img src={prp1} alt="" />
                        </div>
                        <div className="two flex flex-col gap-4">
                            <img src={prp2} alt="" />
                            <img src={prp3} alt="" />
                        </div>
                    </div>
                    <div className="client-content flex gap-5 justify-center  flex-col lg:flex-row gap-y-10 my-5 rounded-md">
                        <div className="one border-2 border-gray-300 lg:w-2/3 bg-white sm:p-10 rounded-md mx-auto w-full px-4  py-5 ">
                            <h1 className="text-2xl font-bold tracking-wide py-2">
                                {" "}
                                {property.title}
                            </h1>
                            <p className="font-semibold tracking-wide text-lg py-4">
                                {property.address}
                            </p>
                            <div className="flex gap-5 py-5 flex-wrap justify-start sm:justify-normal">
                                <button className="border-[1px] border-gray-500 py-2 px-2 bg-transparent rounded-md">
                                    <div className="text-xl font-bold tracking-wide ">
                                        {" "}
                                        ${property.price}{" "}
                                    </div>{" "}
                                    <span className="text-[#6E6E6E]">
                                        {" "}
                                        Online / Cash Payment
                                    </span>
                                </button>
                                <button className="border-[1px] border-gray-500 py-2 px-2 bg-transparent rounded-md">
                                    <div className="text-xl font-bold tracking-wide">
                                        {" "}
                                        ${property.emiPerMonth}/month{" "}
                                    </div>{" "}
                                    0% EMI for 6 Months
                                </button>
                            </div>
                            <h1 className="text-2xl font-bold tracking-wide py-2">
                                {" "}
                                Well-constructed 1562 Sq Ft Home Is Now Offering
                                To You In Uttara For Sale
                            </h1>
                            <p className="font-semibold tracking-wide text-lg py-2 text-[#7C7E7C]">
                                {property.description}
                            </p>
                            <div className="local my-5">
                                <h1 className="text-2xl font-bold tracking-wide py-2">
                                    {" "}
                                    Local Information{" "}
                                </h1>
                                <div className="buttons flex gap-5 flex-wrap">
                                    <button className="hover:bg-black py-2 px-5 hover:text-white rounded-md font-bold border-[1px] border-[#D6D6D6]">
                                        Map
                                    </button>
                                    <button className="hover:bg-black py-2 px-5 hover:text-white rounded-md font-bold border-[1px] border-[#D6D6D6]">
                                        Schools{" "}
                                    </button>
                                    <button className="hover:bg-black py-2 px-5 hover:text-white rounded-md font-bold border-[1px] border-[#D6D6D6]">
                                        Crime{" "}
                                    </button>
                                    <button className="hover:bg-black py-2 px-5 hover:text-white rounded-md font-bold border-[1px] border-[#D6D6D6]">
                                        Shop & Eat{" "}
                                    </button>
                                </div>
                            </div>
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15047129.1220859!2d79.80519898036316!3d22.964383151756895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710268972738!5m2!1sen!2sin"
                                    width="700"
                                    height="410"
                                    loading="lazy"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                        <div className="two flex flex-col gap-4 lg:w-1/3 border-2 border-gray-300 bg-white p-6 rounded-md h-fit mx-auto w-full">
                            <h1 className="text-3xl font-bold">
                                Request for Visit
                            </h1>
                            <form
                                action=""
                                className="flex flex-col"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={user}
                                    // onChange={e=> SetUser(e.target.value)}
                                    {...register("name", {
                                        // required: {
                                        //     value: true,
                                        //     message: "This field is required",
                                        // },
                                        // minLength: {
                                        //     value: 3,
                                        //     message:
                                        //         "The username must consist of at least 3 characters.",
                                        // },
                                    })}
                                    className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2    font-semibold capitalize"
                                />
                                {errors.name && (
                                    <span className="text-red-600 flex gap-2 items-center">
                                        <img
                                            src={aling}
                                            alt=""
                                            className="size-4"
                                        />
                                        {errors.name.message}
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
                                            message:
                                                "Enter a correct Phone number",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message:
                                                "Enter a correct Phone number",
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <span className="text-red-600 flex gap-2 items-center">
                                        <img
                                            src={aling}
                                            alt=""
                                            className="size-4"
                                        />
                                        {errors.phone.message}
                                    </span>
                                )}

                                <input
                                    className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500"
                                    name="startDate"
                                    id="startDate"
                                    onFocus={(e) => (e.target.type = "date")}
                                    type="text"
                                    placeholder="Start Date"
                                    {...register("startDate", {
                                        required: {
                                            value: true,
                                            message: "This field is required",
                                        },
                                    })}
                                />
                                {errors.startDate && (
                                    <span className="text-red-600 flex gap-2 items-center">
                                        <img
                                            src={aling}
                                            alt=""
                                            className="size-4"
                                        />
                                        {errors.startDate.message}
                                    </span>
                                )}

                                <input
                                    className="border-[1px] py-3 px-5 rounded-md border-gray-400 my-2 placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-500"
                                    name="endDate"
                                    id="endDate"
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    placeholder="EndDate"
                                    {...register("endDate", {
                                        required: {
                                            value: true,
                                            message: "This field is required",
                                        },
                                    })}
                                />
                                {errors.endDate && (
                                    <span className="text-red-600 flex gap-2 items-center">
                                        <img
                                            src={aling}
                                            alt=""
                                            className="size-4"
                                        />
                                        {errors.endDate.message}
                                    </span>
                                )}
                                <input
                                    type="submit"
                                    value={`Book for $${property.price}`}
                                    disabled={isSubmitting}
                                    className="font-bold text-white bg-black py-3 px-10 rounded-lg text-lg my-5 cursor-pointer"
                                    onClick={tochange}
                                />
                                {isSubmitSuccessful && visible && (
                                    <span className=" flex gap-2 items-center text-green-600">
                                        <img
                                            src={checked}
                                            alt=""
                                            className="size-[16px]"
                                        />
                                        Booking done
                                    </span>
                                )}
                            </form>
                        </div>
                    </div>
                    <div className="highlights border-2 border-gray-300 lg:w-2/3 bg-white p-10 rounded-md  w-full ">
                        <h1 className="text-3xl font-bold tracking-wide py-5">
                            Home Highlights
                        </h1>
                        <div className="justwrap grid-cols-2 md:grid justify-around flex flex-col gap-7">
                            <div className="fone">
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        Parking
                                    </li>
                                    <p className="text-lg font-semibold">
                                        {property.parking
                                            ? "Available"
                                            : "Not Available"}
                                    </p>
                                </div>
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        Outdoor
                                    </li>
                                    <p className="text-lg font-semibold">
                                        {property.outdoor
                                            ? "Available"
                                            : "Not Available"}
                                    </p>
                                </div>
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        A/C
                                    </li>
                                    <p className="text-lg font-semibold">
                                        {property.AC
                                            ? "Available"
                                            : "Not Available"}
                                    </p>
                                </div>
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        Year Built
                                    </li>
                                    <p className="text-lg font-semibold">
                                        {property.YearBuilt}
                                    </p>
                                </div>
                            </div>
                            <div className="ftwo">
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        HOA
                                    </li>
                                    <p className="text-lg font-semibold">
                                        None
                                    </p>
                                </div>
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        Price/Sqft
                                    </li>
                                    <p className="text-lg font-semibold">
                                        ${property.PricePerSqft}
                                    </p>
                                </div>
                                <div className="cont flex justify-between py-2 items-center gap-5">
                                    <li className="list-disc text-lg font-thin marker:text-gray-500">
                                        Listed
                                    </li>
                                    <p className="text-lg font-semibold">Yes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agentinfo border-2 border-gray-300 lg:w-2/3 bg-white p-10 rounded-md  w-full my-10 ">
                        <h1 className="text-2xl font-bold tracking-wide py-2 text-center sm:text-left">
                            Agent Information
                        </h1>
                        <div className="m_w  sm:gap-10 sm:items-start flex flex-col sm:flex-row items-center gap-5">
                            <div>
                                <img
                                    src={agent}
                                    alt=""
                                    className="size-[150px] my-5"
                                />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold tracking-wide py-2">
                                    {property.owner?.name}
                                </h1>
                                <div className="rating flex justify-between gap-2 items-center">
                                    <div className="wrapper_ratings ">
                                        <span
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                        <span
                                            data-index="0"
                                            data-forhalf="★"
                                            className="text-orange-600 text-lg"
                                        >
                                            ★
                                        </span>
                                    </div>
                                    <div className="rating_info">
                                        {property.owner?.rating} reviews
                                    </div>
                                </div>
                                <div className="mail flex gap-2 py-2">
                                    <img src={env} alt="" />
                                    <span className="text-[#929292]">
                                        {property.owner?.email}
                                    </span>
                                </div>
                                <div className="mail flex gap-2 py-2">
                                    <img src={phonecall} alt="" />
                                    <span className="text-[#929292]">
                                        +91-{property.owner?.phoneNo}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PropertyDetails;
