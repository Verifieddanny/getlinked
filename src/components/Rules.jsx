import React, { useEffect } from "react";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";
import Featther from "./Featther";
import Lady from "../assets/lady_on_chair.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Rules() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className="intro md:px-[4rem]">
      <div className="md:w-[50%] w-full md:text-left text-center ">
        <h2
          className="introP md:text-[1.7rem] text-[0.7rem] "
          data-aos="fade-down"
        >
          Rules
          <br /> <span> and Guidelines</span>
        </h2>
        <p className="md:text-[1rem] text-[0.7rem]" data-aos="fade-down">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="md:w-[50%] w-full p-3 relative">
        <img src={Lady} className="md:w-[80%]" data-aos="fade-left" />
      </div>
      <img
        src={grayStar}
        className="absolute top-[10rem]  left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={star}
        className="absolute top-[15rem]  right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <Featther type={"third"} />
      <Featther type={"fourth"} />
    </section>
  );
}

export default Rules;
