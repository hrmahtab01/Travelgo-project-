import React from "react";
import Location from "../Component/Location";

const About = () => {
  return (
    <div>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2  text-3xl font-bold">
            About Use{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            maiores asperiores quas distinctio quae non ipsum laudantium
            reprehenderit earum quasi fuga dolores perferendis amet minima
            provident, eos quibusdam esse rem natus ducimus quam? Rem architecto
            aspernatur, impedit incidunt cumque laborum iusto suscipit quo
            voluptatum numquam labore! Rem, ea. Doloremque, tempore!
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            nemo vel deleniti, laborum veniam consequuntur doloremque delectus
            est autem perspiciatis suscipit soluta voluptates facilis sed quasi.
            Ex consequatur commodi tempora!
          </p>
        </div>
        <Location/>
      </div>
    </div>
  );
};

export default About;
