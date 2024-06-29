import React from "react";
import Slider from "react-slick";

const Testomonial = () => {
  const TesimonialData = [
    {
      id: 1,
      Name: "hasibur",
      Text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum hic at minima a animi delectus consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/20877320/pexels-photo-20877320/free-photo-of-black-and-white-photo-of-an-elegant-man-in-a-suit-sitting-in-an-armchair.jpeg",
    },
    {
      id: 2,
      Name: "Rahman",
      Text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum hic at minima a animi delectus consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg",
    },

    {
      id: 3,
      Name: "Mahtab",
      Text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum hic at minima a animi delectus consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/3400560/pexels-photo-3400560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="p-10">
      <div className="container mx-auto">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonail</h1>
          <p className="text-xs text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            provident vel numquam nihil quas, nostrum inventore corrupti.
            Laboriosam, error architecto.
          </p>
        </div>
        <Slider {...settings}>
          {TesimonialData.map(({ id, Name, Text, img }) => (
            <div key={id} className="mt-16 ">
              <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                <img
                  className="w-24 h-24 mx-auto rounded-full "
                  src={img}
                  alt=""
                />
                <h1 className="text-center  text-xl font-bold ">{Name}</h1>
                <p className="text-gray-500 text-sm text-center line-clamp-2">
                  {Text}
                </p>
                <p className="text-black/10 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testomonial;
