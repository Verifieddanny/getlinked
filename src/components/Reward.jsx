import React, { useEffect } from "react";
import Price from "../assets/prices.png";
import cup from "../assets/trophy.png";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";
import purple from "../assets/purple_star.svg";
import Button from "./Button";
import Featther from "./Featther";
import AOS from "aos";
import "aos/dist/aos.css";

function Reward() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className="reward">
      <span className=" flex flex-col w-full md:text-left md:items-end items-center text-center my-4 px-2 md:px-[4rem]">
        <h2
          className="  introP  md:text-[1.7rem] text-[0.7rem] md:mr-[19%] "
          data-aos="fade-down"
        >
          Prizes and <br /> <span>Reward</span>
        </h2>
        <p className="md:text-[1rem] text-[0.7rem]" data-aos="fade-down">
          Highlight of the prizes or rewards for winners
          <br /> and for participants.
        </p>
      </span>
      <div className="flex md:flex-row flex-col justify-between items-center p-1 md:p-[2rem]">
        <div className="md:w-[50%] w-full md:text-left text-center flex flex-col md:items-start items-center">
          <img src={cup} data-aos="fade-right" />
        </div>
        <div className="md:w-[50%] w-full p-3 relative">
          <img src={Price} data-aos="fade-left" />
        </div>
      </div>
      <img
        src={star}
        className="absolute top-[90vh]  left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={grayStar}
        className="absolute top-[17rem]  left-[7rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={purple}
        className="absolute top-[4rem] left-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <Featther type={"sevfive"} />
      <Featther type={"sevsix"} />
    </section>
  );
}

export default Reward;
