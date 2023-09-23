import React, { useEffect } from "react";
import partner from "../assets/Partner.svg";
import Featther from "./Featther";
import AOS from "aos";
import "aos/dist/aos.css";

function Partners() {
  useEffect(() => {
    // AOS.init({
    //   duration: 750,
    //   offset: 0,
    //   once: true,
    //   anchorPlacement: "top-bottom",
    // });
    AOS.init({
      duration: 750,
      anchorPlacement: "top-bottom",
      startEvent: "load",
    });
    AOS.refresh();
  }, []);
  return (
    <section className="rewards pb-[2rem] flex flex-col items-center px-[4rem]">
      <h1 className="text-center timeP" data-aos="fade-down">
        Partners and Sponsors
      </h1>
      <p className="text-center my-[2rem]" data-aos="fade-down">
        Getlinked Hackathon 1.0 is honored to have the following
        <br /> major companies as its partners and sponsors
      </p>

      <img src={partner} data-aos="fade-up" />
      <Featther type={"five"} />
      <Featther type={"six"} />
    </section>
  );
}

export default Partners;
