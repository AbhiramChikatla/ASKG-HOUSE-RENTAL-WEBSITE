import React from 'react'
import bath from "../assets/bath.png";
import location from "../assets/location.png";
import bed from "../assets/bed.png";
import expand from "../assets/expand.png";
import family from "../assets/family.png";


const Cards = (props) => {

  return (
    <div className={"card  lg:w-[calc(78vw/3)] py-2 px-2 md:w-[calc(78vw/2)] w-full border-[1px] border-gray-200 h-fit rounded-md max-w-[385px] flex flex-col grow shrink-0 "+ props.className}
     style={props.style}
     >
                            <img
                                src={'img' + "\\site"+String(Math.ceil(0+Math.random()*5))+".png"}
                                // src='img\site1.png'
                                alt=""
                                className=" h-[260px] w-full lg:w-auto"
                            />
                            <div className="content pt-5 px-5 ">
                                <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center ">
                                    <img
                                        src={location}
                                        alt=""
                                        className="size-4"
                                    />
                                    {props.location}
                                </h1>
                                <div className="metadata text-gray-600 py-2">
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bed}
                                                alt=""
                                                className="size-4"
                                            />
                                            {props.numBathrooms+1} Bed Room
                                        </h1>
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={bath}
                                                alt=""
                                                className="size-4"
                                            />
                                            {props.numBathrooms} Bath
                                        </h1>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <h1 className="font-bold lg:text-lg tracking-wide flex gap-2 items-center">
                                            <img
                                                src={expand}
                                                alt=""
                                                className="size-4"
                                            />
                                           {props.house_size}
                                        </h1>
                                        <h1 className="font-bold lg:text-[16px] tracking-wide flex gap-2 items-center">
                                            <img
                                                src={family}
                                                alt=""
                                                className="size-4"
                                            />
                                         {props.house_type}
                                        </h1>
                                    </div>
                                </div>
                                <div className="price flex justify-start items-center  gap-10">
                                    <button className="bg-black py-2 px-5 text-white rounded-md font-bold hover:text-gray-400">
                                        View Details
                                    </button>
                                    <h1 className="font-bold lg:text-xl text-lg">
                                    ₹ {props.price}
                                    </h1>
                                </div>
                            </div>
                        </div>
  )
}

export default Cards
