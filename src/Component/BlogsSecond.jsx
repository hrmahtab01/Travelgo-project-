import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../assets/places/tajmahal.jpg";
import Img2 from "../assets/places/water.jpg";
import Img3 from "../assets/places/boat.jpg";

const BlogsSecond = () => {
    const BlogsData = [
        {
          id: 1,
          image: Img1,
          Title: "The 10 best places to visit in india",
          Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repellat culpa. Temporibus numquam error fugiat delectus id voluptatem ullam optio sit earum voluptas eaque porro officiis ipsa nobis ipsum eius fugit neque, consequuntur reprehenderit, molestias iure, praesentium excepturi maxime? Quo porro pariatur dolore obcaecati est maxime quae et fuga magni.",
          Author: "Tamim Iqbal",
          date: "April, 2024",
        },
        {
          id: 1,
          image: Img2,
          Title: "Top place to visit in us",
          Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repellat culpa. Temporibus numquam error fugiat delectus id voluptatem ullam optio sit earum voluptas eaque porro officiis ipsa nobis ipsum eius fugit neque, consequuntur reprehenderit, molestias iure, praesentium excepturi maxime? Quo porro pariatur dolore obcaecati est maxime quae et fuga magni.",
          Author: "Ratan TATA",
          date: "26 ,April, 2024",
        },
        {
          id: 1,
          image: Img3,
          Title: "Top place to visit in Japan",
          Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repellat culpa. Temporibus numquam error fugiat delectus id voluptatem ullam optio sit earum voluptas eaque porro officiis ipsa nobis ipsum eius fugit neque, consequuntur reprehenderit, molestias iure, praesentium excepturi maxime? Quo porro pariatur dolore obcaecati est maxime quae et fuga magni.",
          Author: "mahtab",
          date: "30,April, 2024",
        },
      ];
      return (
        <div>
          <div className="container mx-auto" data-aos="fade-up">
            <div className="flex items-center space-x-2">
              <div className="bg-primary/50 h-10 w-3 my-8"></div>
              <h1 className="text-3xl font-bold"> Our Latest Blogs</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              {BlogsData.map((item, index) => (
                <BlogCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default BlogsSecond
