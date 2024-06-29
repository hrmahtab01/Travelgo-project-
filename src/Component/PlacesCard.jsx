import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlacesCard = ({ Img, Title, Location, Description, Type, Price }) => {
  return (
    <div className="shadow-lg transition-all hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden" data-aos='fade-up' data-aos-delay="200">
        <img
          src={Img}
          alt=""
          className="mx-auto h-[220px] w-full object-cover lg:w-[500px] transition duration-700 hover:skew-x-2 hover:scale-105"
        />
      </div>
      <div className="space-y-2" data-aos='fade-up' data-aos-delay="300">
        <h1 className="line-clamp-1 font-bold text-xl">{Title}</h1>
        <div className="flex items-center gap-2 opacity-70">
          <IoLocationSharp />
          <span>{Location}</span>
       
        </div>
        <p className="line-clamp-2">{Description}</p>
        <div className="flex items-center justify-between border-t-2  y-3 ! mt-3">
          <div className="opacity-70">
            <p>{Type}</p>
          </div>
          <div>
            <p>${Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
