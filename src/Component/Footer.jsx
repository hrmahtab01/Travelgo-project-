import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../assets/video/footer.mp4";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/logo.png";

const Footer = () => {
  const FooterLink = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Best Place",
      link: "/place",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
  ];
  return (
    <div className="py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3  py-5 backdrop-blur-sm bg-white/80 rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img
                src={FooterLogo}
                alt="Footer logo"
                className="max-h-[60px]"
              />
            </h1>
            <p className="text-sm line-clamp-3  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              odit quam tempore sequi aliquam exercitationem alias voluptates
              reiciendis ipsa voluptatum.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Mirpur,Dhaka</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>01711111111</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#">
                <FaInstagram className="h-10 w-9" />
              </a>
              <a href="#">
                <FaFacebook className="h-10 w-9" />
              </a>
              <a href="#">
                <FaLinkedin className="h-10 w-9" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important link
                </h1>
                <ul className="flex flex-col">
                  {FooterLink.map(({ title, link }) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300  hover:!text-primary space-x-1 text-gray-700">
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important link
                </h1>
                <ul className="flex flex-col">
                  {FooterLink.map(({ title, link }) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300  hover:!text-primary space-x-1 text-gray-700">
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important link
                </h1>
                <ul className="flex flex-col">
                  {FooterLink.map(({ title, link }) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300  hover:!text-primary space-x-1 text-gray-700">
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <span>&#11162;</span>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            @Copyright 2024 all right reserved TravelGo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
