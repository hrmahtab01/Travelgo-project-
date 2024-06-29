import React from "react";
import Travelimg from "../assets/travelbox.png";
import Aos from "aos";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[500px]  bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <img data-aos="flip-up"
                className="max-w-[450px] h-[350px] w-full mx-auto object-cover shadow-black"
                src={Travelimg}
                alt="travel img 2"
              />
            </div>
            <div>
              <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
                Explore all corners of the world with us
              </h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8 mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus eaque omnis voluptas deleniti quasi consequatur
                recusandae,react dom menubar costant okaybe.
              </p>
             <div className="flex gap-40" data-aos="flip-up">
             <div className="flex flex-col gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mt-7">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-violet-100 dark:bg-violet-400" />
                    <p>Flight</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-orange-100 dark:bg-orange-400" />
                    <p>Hotel</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mt-7">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-teal-100 dark:bg-teal-400" />
                    <p>Wi-Fi</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-yellow-100 dark:bg-yellow-400" />
                    <p>Food</p>
                  </div>
                </div>
              </div>
              
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
