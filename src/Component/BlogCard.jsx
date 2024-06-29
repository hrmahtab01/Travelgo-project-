import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, Title, Description, Author, date }) => {
  return (
    <Link
      to={`/blogs/${Title}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      state={{ image, Title, Description, Author, date }}
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:text-white">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-105"
          />
        </div>
        <div className="flex justify-between p-2 text-slate-600">
          <p>{date}</p>
          <p>by {Author}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold">{Title}</h1>
          <p className="line-clamp-2">{Description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
