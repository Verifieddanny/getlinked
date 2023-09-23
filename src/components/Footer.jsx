import React from "react";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import ig from "../assets/ri_instagram.svg";
import x from "../assets/x.svg";
import linkedIn from "../assets/ri_linkedin-fill.svg";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";

import lightStar from "../assets/ligt_star.svg";
function Footer() {
  return (
    <footer className="footer relative">
      <div className="footerDiv">
        <div className="md:w-[33%] w-full">
          <span className="logo-cont">
            <p className="logo">
              get<span>linked</span>
            </p>
          </span>
          <p className="mb-6">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p>
            Terms of Use <span className="text-secondary font-semibold">|</span>{" "}
            Privacy Policy
          </p>
        </div>
        <ul className="flex flex-col gap-y-4">
          <li className="text-secondary font-semibold">Useful Links</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li className="flex gap-x-2 text-secondary">
            Follow us
            <img src={x} />
            <img src={ig} />
            <img src={linkedIn} />
          </li>
        </ul>
        <ul className="flex flex-col gap-y-4">
          <li className="text-secondary font-semibold">Contact Us</li>
          <li className="flex gap-x-2">
            <img src={phone} /> +2348067522357
          </li>
          <li className="flex gap-x-2">
            {" "}
            <img src={location} /> 27,Alara Street Yaba 100012 Lagos State
          </li>
        </ul>
      </div>
      <p> All rights reserved. &copy; getlinked Ltd.</p>
      <img
        src={star}
        className="absolute top-[2rem]  left-[6rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={lightStar}
        className="absolute bottom-[0.7rem]  right-[49%]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={grayStar}
        className="absolute top-[4rem]  right-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
      <img
        src={star}
        className="absolute bottom-[4rem]  right-[4rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] animate-pulse h-[0.75rem]"
      />
    </footer>
  );
}

export default Footer;
