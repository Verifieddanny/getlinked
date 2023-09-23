import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
function Button({ children, type }) {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <button
      className="h-[3rem] w-[8rem] flex items-center justify-center bg-gradient-to-r from-[#FE34B9] to-primary rounded-lg mt-[2rem]"
      data-aos="fade-left"
      onClick={() => {
        if (type === "register") navigate("/register");
      }}
    >
      {children}
    </button>
  );
}

export default Button;
