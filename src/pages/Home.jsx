import React from "react";
import NaturelVideo from "../assets/video/main.mp4";
import Hero from "../Component/Hero";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-99] "
          >
            <source src={NaturelVideo} type="video/mp4" />
          </video>
          <div>
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
