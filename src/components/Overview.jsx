import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import line from "../assets/home_page_svg.svg";
import man from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import blaster from "../assets/Image.png";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";
import Featther from "./Featther";
import bulb from "../assets/home_page_bulb.png";
import chain from "../assets/chain.png";
import fire from "../assets/fire.png";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
const calculateTimeLeftPrivate = () => {
  const difference = +new Date("2023-09-25T00:00:00+01:00") - +new Date();
  let timeLeftPrivate = {};
  if (difference > 0) {
    timeLeftPrivate = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeftPrivate;
};

function Overview() {
  const [timeLeftPrivate, setTimeLeftPrivate] = useState(
    calculateTimeLeftPrivate()
  );

  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeftPrivate(calculateTimeLeftPrivate());
    }, 1000);
  }, [timeLeftPrivate]);
  return (
    <section className="overview" id="overview">
      <p
        data-aos="fade-down"
        className="lg:text-right text-center  lg:p-[3.125rem] text-[1rem] lg:text-[1.7rem] italic font-semibold relative"
      >
        {" "}
        <Typewriter
          options={{
            strings: ["Igniting a Revolution in HR Innovation"],
            autoStart: true,
            loop: true,
          }}
        />
        <span>
          <img
            src={line}
            className="absolute right-[2rem] lg:w-auto w-[8rem]"
            data-aos="fade-left"
          />
        </span>
      </p>
      <img
        src={star}
        className="absolute top-[8rem] left-[7rem] md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={grayStar}
        className="absolute top-[12rem] right-[10rem] md:right-[32rem] md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={grayStar}
        className="absolute top-[90vh] md:bottom-[8rem] left-[10rem] md:left-[24rem] md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <Featther type={"first"} />
      <Featther type={"second"} />
      <div className="w-full h-[80vh] md:h-auto   px-[4rem] flex md:flex-row flex-col justify-between md:m-0 mt-[3rem]">
        <div className="relative md:w-[50%] w-full md:block flex flex-col items-center md:m-0 mb-[2rem]  ">
          <p
            className="homepageP md:text-[2rem] flex flex-col md:text-left text-center"
            data-aos="fade-down"
          >
            getlinked Tech <br />
            <span className="flex items-center lg:justify-start justify-center w-full">
              Hackathon <span className="span">1.0</span>
              <img src={chain} className="md:w-[2rem] w-[1rem]" />
              <img src={fire} className="md:w-[2rem] w-[1rem]" />
              <img
                src={bulb}
                className="md:w-[2rem] absolute top-[-1.2rem] md:top-[-1.7rem] w-[1rem] md:right-[47%] right-[20%]"
              />
            </span>
          </p>
          <p
            className="md:text-[1rem] text-[0.7rem] md:mt-[2rem] mt-[1rem]"
            data-aos="fade-down"
          >
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Button type={"register"}>Register</Button>
          <div className="timer flex center gap-x-3" data-aos="fade-right">
            <p>
              <span>
                {" "}
                {timeLeftPrivate.hours < 10 && "0"}
                {timeLeftPrivate.hours}
              </span>
              H
            </p>
            <p>
              <span>
                {" "}
                {timeLeftPrivate.minutes < 10 && "0"}
                {timeLeftPrivate.minutes}
              </span>
              M
            </p>
            <p>
              <span>
                {" "}
                {timeLeftPrivate.seconds < 10 && "0"}
                {timeLeftPrivate.seconds}
              </span>
              S
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={man}
            className="w-[30rem] relative -z-20 grayscale"
            data-aos="fade-up"
          />
          <img src={blaster} className="absolute top-0" data-aos="fade-down" />
        </div>
      </div>
    </section>
  );
}

export default Overview;
