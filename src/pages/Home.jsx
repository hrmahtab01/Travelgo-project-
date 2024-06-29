import React from "react";
import NaturelVideo from "../assets/video/main.mp4";
import Hero from "../Component/Hero";
import Place from "../Component/Place";
import BannerImg from "../Component/BannerImg";
import Poster from "../assets/cover-women.jpg"
import Poster2 from "../assets/travel-cover2.jpg"
import Blogs from "./Blogs";
import Banner from "../Component/Banner";
import Testomonial from "../Component/Testomonial";

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
          <Place/>
          <BannerImg img={Poster}/>
          <Blogs/>
          <Banner/>
          <BannerImg img={Poster2}/>
          <Testomonial/>

      </div>
    </>
  );
};

export default Home;
