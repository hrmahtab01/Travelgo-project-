import React, { useEffect } from "react";
import img1 from "../assets/places/boat.jpg";
import img2 from "../assets/places/tajmahal.jpg";
import img3 from "../assets/places/water.jpg";
import img4 from "../assets/places/place4.jpg";
import img5 from "../assets/places/place5.jpg";
import img6 from "../assets/places/place6.jpg";
import PlacesCard from "./PlacesCard";

const Place = () => {
  const PlaceData = [
    {
      Img: img1,
      Title: "Boat Tour",
      Location: "USA",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum?",
      Price: "100",
      Type: "Cultural Relax",
    },
    {
      Img: img2,
      Title: "Taj Majal",
      Location: "India",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum?",
      Price: "6700",
      Type: "Cultural Relax",
    },
    {
      Img: img3,
      Title: "UnderWater",
      Location: "US",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum?",
      Price: "6200",
      Type: "Cultural Relax",
    },
    {
      Img: img4,
      Title: "Sydney",
      Location: "Australia",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum?",
      Price: "700",
      Type: "Cultural Relax",
    },
    {
      Img: img5,
      Title: "Los Angeles",
      Location: "United states",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum?",
      Price: "5200",
      Type: "Cultural Relax",
    },
    {
      Img: img6,
      Title: "las vegas",
      Location: "California",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum?",
      Price: "2000",
      Type: "Cultural Relax",
    },
  ];
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <div className="flex space-x-2">
          <div className="bg-primary/50 h-10 w-3 my-8 "></div>
          <h2 className="my-8   text-3xl font-bold">Best Places To Visit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlaceData.map((item, index) => (
            <PlacesCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Place;
