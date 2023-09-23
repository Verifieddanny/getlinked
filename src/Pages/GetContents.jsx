import React, { useEffect, useState } from "react";
import Overview from "../components/Overview";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import Attribute from "../components/attribute";
import Faq from "../components/Faq";
import TimeLine from "../components/TimeLine";
import Reward from "../components/Reward";
import Partners from "../components/Partners";
import Policy from "../components/Policy";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function GetContents({ setNavon }) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setNavon(true);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  useEffect(() => {
    const handleVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Overview />
      <Intro />
      <Rules />
      <Attribute />
      <Faq />
      <TimeLine />
      <Reward />
      <Partners />
      <Policy />
      <Footer />
      {showButton && <ToTop top={handleScrollToTop} showButton={showButton} />}
    </>
  );
}

export default GetContents;

const ToTop = ({ top, showButton }) => {
  return (
    <button
      className={`${
        showButton ? "block" : "hidden"
      } p-4 flex items-center justify-center bg-gradient-to-r from-[#FE34B9] to-primary rounded-lg mt-[2rem] fixed bottom-5 right-7 cursor-pointer`}
      onClick={top}
      data-aos="fade-down"
    >
      👆
    </button>
  );
};
