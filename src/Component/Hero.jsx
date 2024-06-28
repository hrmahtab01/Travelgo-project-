import React, { useEffect, useState } from "react";
import Aos from "aos";
const Hero = () => {
    let [PriceValue, SetPriceValue]=useState(40)
    useEffect (()=>{
        Aos.init()
    })
  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white   mt-[250px]">
            <p data-aos="fade-up">Our packages</p>
            <p data-aos="fade-up"  data-aos-delay="600" className="font-bold text-3xl">Search Your Destination</p>
          </div>
          <div className="space-y-4 bg-white rounded-md p-4 relative" data-aos="fade-up"  data-aos-delay="600">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3 space-x-4   items-center">
              <div>
                <label htmlFor="Destination" className="opacity-70">
                  Search Your Destination
                </label>
                <input
                  type="text"
                  name="Destination "
                  id="Destinatiom"
                  placeholder="Dubai"
                  className="w-full
                     bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="Destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="Destination "
                  id="Destinatiom"
                  placeholder="Dubai"
                  className="w-full
                     bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="Destination" className="opacity-70 block">
                  <div className="w-full flex justify-center items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${PriceValue}</p>
                  </div>
                </label>
                <input
                  type="range"
                  name="Destination "
                  id="Destinatiom"
                  placeholder="Dubai"
                  className="w-full
                     appearance-none bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                  min="150"
                  max="1000"
                  value={PriceValue}
                  step="10"
                  onChange={(e) => SetPriceValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
