import React from "react";
import Typed from "react-typed";
import GetStartBtn from "./GetStartBtn";

const Hero = () => {
  return (
    <section className="text-white">
      <section className="max-w-[800px] md:mt-[-4rem] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a]  font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <section className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </section>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-1">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <GetStartBtn />
      </section>
    </section>
  );
};

export default Hero;
