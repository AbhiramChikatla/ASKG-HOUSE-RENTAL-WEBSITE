import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import a from "../assets/a.png";
import site4 from "../assets/site4.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import { backendUrl } from "../context/userContext";
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
const AccountPage = () => {
    const [bookList, setBookList] = useState([]);
    const [resMessage, setResMessage] = useState({});
    const [simulatedTime, setSimulatedTime] = useState(false);

    const { LoginUser } = useContext(userContext);

    const fetchUserBookings = async () => {
        const response = await fetch(`${backendUrl}/fetchbookings`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        let content = await response.json();
        setBookList(content);
    };
    const handleLogout = async () => {
        const response = await fetch(`${backendUrl}/logout`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        console.log("Hi");
        let content = await response.json();
        console.log(content);
        setResMessage(content);
    };
    useEffect(() => {
        setTimeout(() => {
            setSimulatedTime(true);
        }, 4000);
    }, []);
    useEffect(() => {
        fetchUserBookings();
    }, []);

    return (
        <>
            {resMessage.success ? (
                <div>
                    {simulatedTime ? (
                        <Navigate to="/login" />
                    ) : (
                        <div 
                        className="flex flex-col justify-center items-center h-screen"
                        >

                        <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        />
                        <h3 className="text-lg">
                            Logging out...
                        </h3>
                        </div>

                    )}
                </div>
            ) : (
                <div className="main ">
                    <Navbar />
                    <div className="flex gap-10 mx-[10%] my-[5%]">
                        <div className="first border border-[#ccc] w-[40%] shadow ">
                            <div className="pro_pic flex flex-col items-center mt-5 border-b">
                                <img
                                    src={a}
                                    alt=""
                                    className="w-[150px] h-[150px] bg-gray-200 rounded-[80px] object-"
                                />
                                <p className="text-lg underline">
                                    Update Photo
                                </p>
                            </div>
                            <div className="stats mx-[5%]">
                                <div className="flex gap-1 my-2 justify-start items-center">
                                    <img src="/img/home.png" alt="feedback" />
                                    <p> Total Bookings : {bookList.length}</p>
                                </div>
                                <div className="flex gap-1 my-2 justify-start items-center">
                                    <img src="/img/verify.png" alt="feedback" />
                                    <p>Identity Verified</p>
                                </div>
                            </div>
                            <div className="acc my-7 border-t mx-5">
                                <div className="font-bold text-xl  my-7 capitalize">
                                    {LoginUser?.username} Verified
                                </div>
                                <ul className="italic ">
                                    <li className="flex gap-1 items-center">
                                        <img src="/img/check.png" alt="" />
                                        Identity
                                    </li>
                                    <li className="flex gap-1 items-center">
                                        <img src="/img/check.png" alt="" />
                                        Email Address
                                    </li>
                                    <li className="flex gap-1 items-center">
                                        <img src="/img/check.png" alt="" />
                                        Phone number
                                    </li>
                                </ul>

                                <div className="info my-5 text-gray-600">
                                    <p>
                                        <Link
                                            to={"/privacypolicy"}
                                            className="underline"
                                        >
                                            Learn More
                                        </Link>{" "}
                                        about how confirming account info helps
                                        the Airbnb community more secure.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="second w-[50%] border border-[#ccc] shadow-lg px-[2%] py-[2%]">
                            <div className="main flex-col justify-start">
                                <h1 className="font-bold text-2xl capitalize">
                                    Hi , I'm {LoginUser?.username}
                                </h1>
                                <p className="text-gray-600">Joined in 2020</p>
                                <p className="underline font-semibold">
                                    Edit Profile
                                </p>
                            </div>
                            <div>
                                <button
                                    className="bg-black text-white py-2 px-5 rounded-md my-2"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                            <div className="main flex-col justify-start my-5">
                                <h1 className="font-bold text-lg ">About</h1>
                                <p className=" ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ratione delectus quidem
                                    nesciunt nihil! Praesentium itaque
                                    accusantium quisquam veniam ut eveniet, ex
                                    voluptatem ducimus.
                                </p>
                                <ul className=" my-5">
                                    <li className="flex gap-1 items-center my-2">
                                        <img src="/img/home.png" alt="" />
                                        Lives in NewYork,USA.
                                    </li>
                                    <li className="flex gap-1 items-center my-2">
                                        <img src="/img/chat.png" alt="" />
                                        speaks English
                                    </li>
                                    <li className="flex gap-1 items-center my-2">
                                        <img src="/img/portfolio.png" alt="" />
                                        Work: Mexico
                                    </li>
                                </ul>
                            </div>
                            <div className="reviews border-t ">
                                <h1 className="text-xl font-semibold my-6 flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="black"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                        />
                                    </svg>
                                    0 Reviews:
                                </h1>
                                <div className="border-y underline py-7">
                                    Reviews by you
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="forbook border border-[#ccc]  shadow-md mx-[10%] my-[5%] p-[1.5%] ">
                        <h1 className="font-bold text-2xl capitalize">
                            Total Bookings History
                        </h1>
                        {bookList.map((item, ind) => (
                            <div className="card flex items-center gap-4">
                                <div className="first">
                                    <img
                                        src={site4}
                                        alt=""
                                        className="size-[200px] object-contain"
                                    />
                                </div>
                                <div className="second">
                                    <h1 className="font-medium text-xl my-2">
                                        {item.bookedHouse.title}
                                    </h1>

                                    <div className="dates flex gap-2 my-2">
                                        <div className="flex ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                                />
                                            </svg>
                                            {item.startDate.split("T")[0]}
                                        </div>
                                        {"->"}
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                                />
                                            </svg>
                                            {item.endDate.split("T")[0]}
                                        </div>
                                    </div>
                                    <div className="days flex gap-2 my-2">
                                        <div className="flex ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                                />
                                            </svg>

                                            {item.startDate.split("T")[0]}
                                        </div>
                                        {"->"}
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default AccountPage;
