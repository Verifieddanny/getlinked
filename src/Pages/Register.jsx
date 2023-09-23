import React, { useState, useEffect } from "react";
import img from "../assets/3d-graphic-designer-showing-thumbs-up.png";
import Featther from "../components/Featther";
import { toast, Toaster } from "sonner";
import progress from "../assets/progressing.png";
import congrats from "../assets/congratulation.png";
import wink from "../assets/wink-emoji-woman.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const baseUrl = "https://backend.getlinked.ai";
function Register({ setNavon }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);
  const [team, setTeam] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState(null);
  const [group, setGroup] = useState(null);
  const [agreement, setAgreement] = useState(false);
  const [done, setDone] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/hackathon/categories-list`);

        const data = await res.json();

        setCategoryList(data);
      } catch (err) {}
    };
    getCategories();
  }, []);

  const registerGroup = async (register) => {
    try {
      const res = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok !== true) {
        toast.error("Issue under dev");
        return;
      }
      const data = await res.json();
    } catch (err) {
      toast.error("something went wrong try again");
    }
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !team ||
      !email ||
      !phone ||
      !phone ||
      !topic ||
      !category ||
      !group ||
      !agreement
    ) {
      toast.error("Fill in fields correctly");
      return;
    }
    const newTeam = {
      email,
      phone_number: phone,
      team_name: team,
      group_size: group,
      project_topic: topic,
      category,
      privacy_poclicy_accepted: agreement,
    };

    await registerGroup(newTeam);
    window.scrollTo(0, 0);
    setDone(true);
    setTeam("");
    setEmail("");
    setPhone("");
    setTopic("");
    setGroup("");
    setCategory("");
    setAgreement(false);
  };
  return (
    <section className="RegisterPage">
      <p className="p md:text-[1rem] md:hidden block absolute top-[1rem] left-[1rem]">
        Register
      </p>
      <div className="md:w-[50%] w-full" data-aos="fade-right">
        <img src={img} />
      </div>
      <div className="form" data-aos="fade-left">
        <form
          className="flex flex-col md:gap-y-5 gap-y-7 h-auto  md:p-0 px-4"
          onSubmit={handleSubmit}
        >
          <p className="p md:text-[1rem] md:block hidden">Register</p>
          <p className="text-[1rem] md:text-left text-center flex justify-start gap-x-2 mt-0">
            Be part of this movement
            <span className="text-secondary flex flex-col items-start w-fit  p-0 mt-[-0.3rem] relative">
              <img src={progress} className="w-[2.4rem] ml-[40%]" />
              <p className="absolute bottom-[0] m-0 p-0">
                ....................
              </p>
            </span>
          </p>
          <p className="text-[#ffffff] md:text-[1.5rem] md:text-left text-center text-[1rem] mt-[-1rem] font-normal">
            CREATE YOUR ACCOUNT
          </p>

          <div className="w-full flex md:justify-between md:flex-row flex-col md:gap-x-2 gap-y-2">
            <span className="flex flex-col gap-y-1 md:w-[47%] w-full">
              <label>Team's Name</label>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className="bg-transparent pl-2 h-[2.94rem] border-2 border-white rounded-md w-full nfocus:border-secondary outline-none placeholder:text-center placeholder:text-[0.8rem]"
                onChange={(e) => setTeam(e.target.value)}
                value={team}
              />
            </span>
            <span className="flex flex-col gap-y-1 md:w-[47%] w-full">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="bg-transparent pl-2 h-[2.94rem] border-2 border-white rounded-md w-full focus:border-secondary outline-none placeholder:text-center placeholder:text-[0.8rem]"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </span>
          </div>
          <div className="w-full flex md:justify-between md:flex-row flex-col md:gap-x-2 gap-y-2">
            <span className="flex flex-col gap-y-1 md:w-[47%] w-full">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent pl-2 h-[2.94rem] border-2 border-white rounded-md w-full focus:border-secondary outline-none placeholder:text-center placeholder:text-[0.8rem]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </span>
            <span className="flex flex-col gap-y-1 md:w-[47%] w-full">
              <label>Project Topic</label>
              <input
                type="text"
                placeholder="What is your group project topic"
                className="bg-transparent pl-2 h-[2.94rem] border-2 border-white rounded-md w-full focus:border-secondary outline-none placeholder:text-center placeholder:text-[0.8rem]"
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
              />
            </span>
          </div>
          <div className="w-full flex justify-between items-center  gap-x-2">
            <span className="flex flex-col gap-y-1 w-[47%]">
              <label>Category</label>
              <select
                type="text"
                className="bg-transparent  text-[#ffffff]  h-[2.94rem] border-2 border-white rounded-md w-full focus:border-secondary outline-none "
                onChange={(e) => setCategory(Number(e.target.value))}
                value={category}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="text-left md:text-[0.8rem] text-[0.5rem]"
                >
                  Select your category
                </option>

                {categoryList.map((category, i) => (
                  <option key={i} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col gap-y-1 w-[47%] ">
              <label>Group Size</label>
              <select
                type="text"
                className="bg-transparent t text-[#ffffff]  h-[2.94rem] border-2 border-white rounded-md w-full focus:border-secondary outline-none "
                onChange={(e) => setGroup(Number(e.target.value))}
                value={group}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="text-left md:text-[0.8rem] text-[0.5rem]"
                >
                  Select
                </option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </span>
          </div>
          <i className="text-[#FF26B9] my-4 md:text-[0.75rem] text-[0.5625rem] md:text-left text-center">
            Please review your registration details before submitting
          </i>
          <div className="flex gap-x-1 items-center md:justify-start justify-center w-full ">
            <input
              type="checkbox"
              className=" accent-secondary w-[1rem] h-[1rem]"
              onChange={(e) => setAgreement(e.target.checked)}
              checked={agreement}
            />
            <p className="md:text-[0.8rem] text-[0.5rem] ">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <div className="w-full flex justify-center">
            <button className="h-[3rem] w-[8rem] md:w-full flex items-center justify-center bg-gradient-to-r from-[#FE34B9] to-primary rounded-lg mt-[2rem]">
              Register
            </button>
          </div>
        </form>
      </div>
      {done && <Success />}
      <Featther type={"regTop"} />
      <Featther type={"regBottom"} />
      <Toaster position="bottom-right" expand={false} richColors />
    </section>
  );
}

export default Register;

const Success = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="absolute w-screen h-full z-50 bg-[#150e28e2] top-0 left-0 flex justify-center pt-[4rem] md:pt-[6rem] ">
      <div
        className="md:w-[34rem] w-[90%] md:h-[30rem] h-[80vh] border-2 border-secondary rounded-md text-center flex flex-col items-center gap-y-5 px-4"
        data-aos="fade-down"
      >
        <img src={congrats} className="md:w-[50%]" data-aos="fade-up" />
        <p
          className="text-[#ffffff] md:text-[1.5rem] md:text-left text-center text-[1rem] mt-[-1rem] font-normal uppercase"
          data-aos="fade-down"
        >
          Congratulation
        </p>
        <p
          className="text-[#ffffff] md:text-[1.5rem] md:text-left text-center text-[1rem] mt-[-1rem] font-normal uppercase"
          data-aos="fade-down"
        >
          you have successfully Registered!
        </p>
        <p data-aos="fade-down">
          Yes, it was easy and you did it!
          <span className="flex items-center gap-x-2">
            check your mail box for next step
            <img src={wink} data-aos="fade-left" />
          </span>
        </p>
        <button
          className="h-[3rem]  w-full flex items-center justify-center bg-gradient-to-r from-[#FE34B9] to-primary rounded-lg mt-[2rem]"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};
