import React from "react";
import Laptop from "../assets/image/laptop.jpg";
import GetStartBtn from "./GetStartBtn";

const Analytics = () => {
  return (
    <section className="w-full bg-white py-6 px-4 ">
      <section className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <section className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex,
            dolores temporibus delectus laboriosam sed, assumenda deserunt
            excepturi explicabo neque perferendis voluptates doloremque ipsum,
            dignissimos totam! Fugit tempore quod ipsa.
          </p>
          <GetStartBtn />
        </section>
      </section>
    </section>
  );
};

export default Analytics;
