import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ ShowMenu, SetShowMenu }) => {
  const Navlinks = [
    {
      Name: "Home",
      link: "/",
    },
    {
      Name: "About",
      link: "/about",
    },
    {
      Name: "Blogs",
      link: "/blogs",
    },
    {
      Name: "Best Place",
      link: "/place",
    },
  ];

  return (
 <div>
    {ShowMenu &&(
        <div className="fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white
       dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md">
   <div>
   <div className="items-center flex gap-5 justify-start">
            <FaUserCircle size={50} className="text-gray-500"/>
            <div className="text-gray-500">
                <h1>Hello User</h1>
                <h1 className="text-sm text-slate-500"> Premium user</h1>
            </div>
        </div>
        <div>
            <ul className="cursor-pointer space-y-4 text-xl mt-4">
                {Navlinks.map((item ,index)=>(
                    <li className="cursor-pointer" key={index}>
                        <Link className="" to={item.link} onClick={()=>(SetShowMenu(false))}> {item.Name} </Link>
                    </li>
                ))}
            </ul>
        </div>
   </div>

        </div>
    )}
 </div>
  );
};

export default ResponsiveMenu;
