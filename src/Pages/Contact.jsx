import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Featther from "../components/Featther";
import ig from "../assets/ri_instagram.svg";
import x from "../assets/x.svg";
import linkedIn from "../assets/ri_linkedin-fill.svg";
import Button from "../components/Button";
import back from "../assets/back.svg";
import { toast, Toaster } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";
const baseUrl = "https://backend.getlinked.ai";
function Contact({ setNavon }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const contactMe = async (newContact) => {
    try {
      const res = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok !== true) {
        toast.error("Issue under dev");
        return;
      }
      const data = await res.json();
      toast.success("Message Sent😉");
    } catch (err) {
      toast.error("something went wrong try again");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Fill in fields correctly");
      return;
    }
    const newContact = {
      email,
      first_name: name,
      message,
    };

    await contactMe(newContact);
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setNavon(true);
    } else {
      setNavon(false);
    }
  }, [isMobile, setNavon]);
  return (
    <section className="login">
      <img
        src={back}
        className="md:hidden block absolute w-[2.5rem] h-[2.5rem] cursor-pointer top-[1rem] left-[1rem]"
        onClick={() => navigate("/")}
      />
      <div
        className="md:w-[50%] w-full md:flex hidden flex-col gap-y-3 md:text-left text-center"
        data-aos="fade-left"
      >
        <p className="p md:text-2xl">Get in touch</p>
        <p className="text-[1rem] ">
          Contact
          <br />
          Information
        </p>
        <p className="text-[1rem] ">
          27,Alara Street
          <br />
          Yaba 100012
          <br />
          Lagos State
        </p>
        <p className="text-[1rem] ">Call Us : 09067522357</p>
        <p className="text-[1rem] ">
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>
        <p className="text-secondary">Share on</p>
        <span className="flex gap-x-3">
          <img src={x} />
          <img src={ig} />
          <img src={linkedIn} />
        </span>
      </div>
      <div className="form" data-aos="fade-right">
        <form
          className="flex flex-col md:gap-y-5 gap-y-7 h-auto  items-center"
          onSubmit={handleSubmit}
        >
          <p className="p md:text-[1rem] text-left">
            Questions or need assistance? <br />
            Let us know about it!
          </p>
          <input
            type="text"
            className="bg-transparent h-[2.94rem] border-2 border-white rounded-md w-full pl-4 focus:border-secondary outline-none"
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            className="bg-transparent h-[2.94rem] border-2 border-white rounded-md w-full pl-4 focus:border-secondary outline-none"
            placeholder="Mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="bg-transparent md:min-h-[7rem] resize-none min-h-[12rem] border-2 border-white rounded-md w-full pl-4 focus:border-secondary outline-none"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button>Submit</Button>
        </form>
      </div>
      <div className="md:hidden flex flex-col w-full items-center gap-y-3 mb-3">
        <p className="text-secondary">Share on</p>
        <span className="flex gap-x-3">
          <img src={x} />
          <img src={ig} />
          <img src={linkedIn} />
        </span>
      </div>
      <Featther type={"regTop"} />
      <Featther type={"regBottom"} />
      <Toaster position="bottom-right" expand={false} richColors />
    </section>
  );
}

export default Contact;
