import React, { useEffect } from "react";
import bigIdea from "../assets/The big idea.png";
import arrow from "../assets/arrow.svg";
import lightStar from "../assets/ligt_star.svg";
import purple from "../assets/purple_star.svg";
import AOS from "aos";
import "aos/dist/aos.css";
function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      easing: "'ease-in-out-back'",

      // anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className="intro md:px-[4rem]">
      <div className="md:w-[50%] w-full p-3 relative">
        <img src={bigIdea} className="md:w-[80%]" data-aos="fade-right" />
        <img
          src={arrow}
          className="absolute md:bottom-0 bottom-[-1.1rem] md:right-5 right-[45%] md:w-[4rem] w-[2rem] h-[2.2375rem] md:h-[4.4375rem]"
        />
      </div>
      <div className="md:w-[50%] w-full md:text-left text-center ">
        <h2
          className="introP md:text-[1.7rem] text-[0.7rem] "
          data-aos="fade-down"
        >
          Introduction to getlinked tech <br /> <span>Hackathon 1.0</span>
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
      <img
        src={lightStar}
        className="absolute top-[17rem]  left-[7rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={purple}
        className="absolute top-[15rem]  right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
    </section>
  );
}

export default Intro;
