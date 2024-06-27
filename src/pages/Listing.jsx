import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import card from "../assets/card.png";
import right from "../assets/right.png";
import search from "../assets/search.png";
import cancel from "../assets/cancel.png";
import site1 from "../assets/site1.png";
import site2 from "../assets/site2.png";
import site3 from "../assets/site3.png";
import site4 from "../assets/site4.png";
import site5 from "../assets/site5.png";

import bath from "../assets/bath.png";
import location from "../assets/location.png";
import bed from "../assets/bed.png";
import expand from "../assets/expand.png";
import family from "../assets/family.png";
import { useForm } from "react-hook-form";
import alert from "../assets/alert.png";
import { useState } from "react";
import Cards from "../components/Cards";

const Listing = () => {
    //  for fetching card data
    //  adding random cards data

    const [carddata, setCarddata] = useState([]);

    const fetchCardData = async () => {
        let response = await fetch("http://localhost:3000/houses_data");

        let fetched_data = await response.json();
        setCarddata(fetched_data);
    };

    useEffect(() => {
        fetchCardData();
    }, []);

    const [cont, setCont] = useState([
        "Hyderabad",
        "₹ 200,000- ₹ 400,000",
        "Buy",
        "Bed-1",
    ]);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    } = useForm();
    const onSubmit = async (data) => {
        reset();
        let response = await fetch("http://localhost:3000/listing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let content = await response.json();
        setCont(Object.values(data));
        setCarddata(content);
    };
    const handleClick = (e) => {
        console.log(e.target, e.target.innerText);
        // console.log(cont);
        // let newArray=cont;
        // newArray.pop(`${e.target.innerText}`)
        // setCont(newArray)
        // console.log(newArray);
        // console.log(cont);
        // let copyArray = cont;
        // console.log(copyArray);
        // if (copyArray.indexOf(`${e.target.innerText}`)+1) {
        //     copyArray.pop(`${e.target.innerText}`);
        //     console.log(copyArray);

        //     setCont(copyArray);
        // }
        setCont((oldValues) => {
            return oldValues.filter((val) => val !== e.target.innerText);
        });
    };

    return (
        <div>
            <Navbar />
            <div className="main bg-[#FFF9F6] w-full mt-5">
                <div className="main-wrapper xl:mx-40 xl:py-20 lg:mx-28 lg:py-10 md:mx-16 md:py-6 sm:mx-8 sm:py-4 mx-5 py-2">
                    <div className="content ">
                        <h1 className="font-bold xl:text-4xl tracking-wide md:text-xl text-lg text-center lg:text-left">
                            Find Property
                        </h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="wrapper flex md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row"
                        >
                            <input
                                type="text"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                placeholder="Enter your Address"
                                style={{ textTransform: "capitalize" }}
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                    minLength: {
                                        value: 3,
                                        message:
                                            "The address must consist of at least 3 characters.",
                                    },
                                })}
                            />
                            <select
                                name="price"
                                id="price"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            >
                                <option
                                    value="₹ 200000 - ₹ 400000"
                                    className="text-gray-600"
                                >
                                    ₹ 200,000 - ₹ 400,000
                                </option>

                                <option
                                    value="₹ 400000 - ₹ 600000"
                                    className="text-gray-600"
                                >
                                    ₹ 400,000 - ₹ 600,000
                                </option>
                                <option
                                    value="₹ 600000 - ₹ 800000"
                                    className="text-gray-600"
                                >
                                    ₹ 600,000 - ₹ 800,000
                                </option>
                                <option
                                    value="₹ 800000 - ₹ 1000000"
                                    className="text-gray-600"
                                >
                                    ₹ 800,000 - ₹ 1,000,000
                                </option>
                                <option
                                    value="₹ 1200000 - ₹ 1400000"
                                    className="text-gray-600"
                                >
                                    ₹ 1,200,000 - ₹ 1,400,000
                                </option>
                                <option
                                    value="₹ 1400000 - ₹ 1500000"
                                    className="text-gray-600"
                                >
                                    ₹ 1,400,000 - ₹ 1,500,000
                                </option>
                            </select>
                            <select
                                name="category"
                                id="category"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                defaultValue={"Buy"}
                                {...register("category", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            >
                                <option
                                    value="Category"
                                    className="text-gray-600"
                                >
                                    Category
                                </option>
                                <option value="Buy" className="text-gray-600">
                                    Buy
                                </option>
                                <option value="Sell" className="text-gray-600">
                                    Sell
                                </option>
                                <option value="Rent" className="text-gray-600">
                                    Rent
                                </option>
                            </select>
                            <select
                                name="bedrooms"
                                id="bedrooms"
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0"
                                {...register("bedrooms", {
                                    required: {
                                        value: true,
                                        message: "This field is required",
                                    },
                                })}
                            >
                                <option
                                    value=" Bed-1"
                                    className="text-gray-600"
                                >
                                    Bed-1
                                </option>
                                <option
                                    value="Beds-2"
                                    className="text-gray-600"
                                >
                                    Beds-2
                                </option>
                                <option
                                    value="Beds-3"
                                    className="text-gray-600"
                                >
                                    Beds-3
                                </option>
                                <option
                                    value="Beds-4 +"
                                    className="text-gray-600"
                                >
                                    Beds-4 +
                                </option>
                            </select>

                            <input
                                type="submit"
                                value="Search"
                                disabled={isSubmitting}
                                className="py-3  rounded-lg lg:my-5 px-4 lg:px-6 my-2 w-[50%] mx-auto md:w-auto md:mx-0 flex gap-2 bg-black text-white items-center font-bold
                            justify-center cursor-pointer"
                            />
                            {(errors.address ||
                                errors.price ||
                                errors.category ||
                                errors.bedrooms) && (
                                <span className="text-red-600 flex gap-2 items-center">
                                    <img
                                        src={alert}
                                        alt=""
                                        className="size-4"
                                    />
                                    Please fill all the details
                                </span>
                            )}
                        </form>
                        <div className="anotherwrapper   md:gap-5 md:justify-center lg:justify-start flex-col md:flex-row hidden md:flex">
                            {cont.map((item) => (
                                <div key={item} className="todisplay">
                                    <button
                                        className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through"
                                        onClick={handleClick}
                                    >
                                        {item}
                                        <img src={cancel} className="size-2" />
                                    </button>
                                </div>
                            ))}

                            {/* <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    Square Feet 750 - 2000 sq. ft
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div>
                            <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    Year Built 5 - 15
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div>
                            <div className="todisplay">
                                <button className="border-[1px] p-2 rounded-md flex gap-2 items-center hover:bg-gray-100 hover:line-through">
                                    New Construction
                                    <img src={cancel} className="size-3" />
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <div
                        className={
                            carddata.length == 0
                                ? ""
                                : "grid " +
                                  "container  w-full  lg:grid-cols-3 md:grid-cols-2 grid-rows-1 mx-auto my-10 gap-5 justify-center"
                        }
                    >
                        {carddata.length == 0 && (
                            <div className="w-full flex flex-col justify-center items-center text-center my-10">
                                <img src="img/no-results.png" alt="" />
                                <span>
                                    {" "}
                                    Sorry, we couldn't find any results
                                </span>
                            </div>
                        )}
                        {carddata.map((item, index) => {
                            return <Cards key={index} {...item} />;
                        })}
                    </div>
                    <div className="navigation mt-5 flex justify-between flex-col sm:flex-row gap-2 sm:items-center">
                        <div className="number flex gap-2">
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                1
                            </div>
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                2
                            </div>
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                3
                            </div>
                            <div className="box border-[1px] w-fit py-2 px-5 rounded-lg border-gray-800">
                                4
                            </div>
                        </div>
                        <div className="nextpage">
                            <button className="flex gap-2 border-[1px] border-black  py-2 px-5 rounded-md font-semibold">
                                Next Page
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Listing;
