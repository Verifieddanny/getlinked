import React, { useEffect } from "react";
import key from "../assets/key.png";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
function Policy() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className=" policy">
      <div className="md:w-[50%] w-full md:text-left text-center flex flex-col md:items-start items-center md:px-0 px-[1rem]">
        <h2
          className="introP md:text-[1.7rem] text-[0.7rem] mb-[2rem] "
          data-aos="fade-down"
        >
          Privacy Policy and <br /> <span> Terms</span>
        </h2>
        <p
          className="md:text-[1rem] text-[0.7rem] mb-[2rem]"
          data-aos="fade-down"
        >
          Last updated on September 12, 2023
        </p>
        <p
          className="md:text-[1rem] text-[0.7rem] mb-[2rem]"
          data-aos="fade-down"
        >
          Below are our privacy & policy, which outline a lot of goodies.
          <br /> it’s our aim to always take of our participant
        </p>
        <div
          data-aos="fade-right"
          className="border-2 border-secondary bg-[#d9d9d906] rounded-lg flex flex-col gap-y-4 p-2 md:p-[4rem]"
        >
          <p className="md:text-[1rem] text-[0.7rem] " data-aos="fade-down">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p
            className="md:text-[1rem] text-[0.7rem] text-secondary text-left"
            data-aos="fade-down"
          >
            <b>Licensing Policy</b>
          </p>
          <p
            className="md:text-[1rem] text-[0.7rem]  text-left"
            data-aos="fade-down"
          >
            <b>Here are terms of our Standard License:</b>
          </p>
          <ul className="ul">
            <li data-aos="fade-down">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </li>
            <li data-aos="fade-down">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </li>
          </ul>
          <div className="w-full flex justify-center">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-full p-3 relative">
        <img src={key} className="md:w-[80%]" data-aos="fade-left" />
      </div>
    </section>
  );
}

export default Policy;
