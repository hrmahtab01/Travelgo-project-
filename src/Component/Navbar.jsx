import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  let [ShowMenu, SetShowMenu] = useState(false);

  const DropdownLink = [
    {
      Name: "Our Services",
      link: "/#Services",
    },
    {
      Name: "Top Brands",
      link: "/#Mobaile_Brands",
    },
    {
      Name: "Location",
      link: "/#Location",
    },
  ];
  let ToggoleMenu=()=>{
    SetShowMenu(!ShowMenu)
  }
  return (
    <nav className="sticky top-0 right-0 w-full z-50 bg-white text-black shadow-md">
      <div className=" bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-[2px] sm:block hidden">
          <div className=" flex justify-between ">
            <p>20% off next on booking</p>
            <p>Mobaile number.94555255</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center ">
          <div>
            <Link to="/" onClick={() => window.scroll(0, 0)}>
              <img className="h-16" src={LogoImg} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li className="py-4">
                <NavLink
                  activeClassName="active"
                  to="/"
                  onClick={() => window.scroll(0, 0)}
                >
                  Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  activeClassName="active"
                  to="/Blogs"
                  onClick={() => window.scroll(0, 0)}
                >
                  Blogs
                </NavLink>
              </li>
              <li activeClassName="active" className="py-4 ">
                <NavLink to="/place" onClick={() => window.scroll(0, 0)}>
                  Best Place
                </NavLink>
              </li>
              <li activeClassName="active" className="py-4">
                <NavLink to="/about" onClick={() => window.scroll(0, 0)}>
                  About
                </NavLink>
              </li>
              <li className="relative group py-4 cursor-pointer">
                <div className="dropdown  flex items-center">
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-300 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px bg-white p-2]">
                  <ul className="">
                    {DropdownLink.map((data) => {
                      return (
                        <li key={data.Name}>
                          <a
                            className="inline-block w-full hover:bg-primary"
                            href={data.link}
                          >
                            {data.Name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4-">
            <button
              className="bg-gradient-to-r from-primary to-seondary hover:bg-gradient-to-r 
            hover:from-secondary hover:bg-to-secondary hover:bg-primary transition-all duration-500
             text-white py-1 px-3 rounded-full"
            >
              Book Now
            </button>
            <div className="md:hidden block">
              {ShowMenu ? (
                <HiMenuAlt1
                  onClick={ToggoleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={ToggoleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu SetShowMenu={SetShowMenu} ShowMenu={ShowMenu}/>
    </nav>
  );
};

export default Navbar;
