import React from "react";

const Location = () => {
  return (
    <div>
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2  text-3xl font-bold">
          Location to visit
        </h1>
        <div className="rounded-xl mb-5">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116804.55116436254!2d90.4242393!3d23.8135411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700023fd427%3A0x6
         41522159780e7e2!2sLe%20M%C3%A9ridien%20Dhaka!5e0!3m2!1sen!2sbd!4v1719692474644!5m2!1sen!2sbd" width="600" height="350"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
