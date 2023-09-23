import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const NavBar = ({ navOn }) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <>
      {navOn && (
        <nav>
          <span
            className="logo-cont cursor-pointer"
            onClick={() => {
              setOpen(!open);
              setToggle(false);
              navigate("/");
            }}
          >
            <p className="logo">
              get<span>linked</span>
            </p>
          </span>

          <div
            className={`InnerNav ${
              open
                ? "top-0 opacity-100"
                : "top-[-1000%] lg:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
            }`}
          >
            <Link
              smooth
              to={"/#timeline"}
              onClick={() => {
                setOpen(!open);
                setToggle(false);
              }}
              className="navItems"
            >
              Timeline
            </Link>
            <Link
              smooth
              to={"/#overview"}
              onClick={() => {
                setOpen(!open);
                setToggle(false);
              }}
              className="navItems"
            >
              Overview
            </Link>

            <Link
              smooth
              to={"/#faq"}
              onClick={() => {
                setOpen(!open);
                setToggle(false);
              }}
              className="navItems"
            >
              FAQs
            </Link>
            <NavLink
              to={"/contact"}
              onClick={() => {
                setOpen(!open);
                setToggle(false);
              }}
              className="navItems"
            >
              Contact
            </NavLink>

            <button
              className="register"
              onClick={() => {
                setOpen(!open);
                setToggle(true);
                navigate("/register");
              }}
            >
              <div
                className={`w-[7.5rem] py-[0.5rem]  h-[2.5rem] rounded-md text-center transition-all duration-700  ${
                  toggle ? "bg-[color:var(--dark-bg)]" : ""
                }
                ${
                  location.pathname === "/register"
                    ? "bg-[color:var(--dark-bg)]"
                    : ""
                }`}
              >
                Register
              </div>
            </button>
          </div>
          <div className="flex justify-center  h-full   items-center w-fit md:hidden z-[20] absolute right-[1rem]">
            <button className="menu" onClick={() => setOpen(!open)}>
              {open ? <img src={close} /> : <img src={menu} />}
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;

/*
  <NavLink
            to={"#"}
            onClick={() => {
              setOpen(!open);
              setToggle(false);
            }}
          >
            Timeline
          </NavLink>
          <NavLink
            to={"#"}
            onClick={() => {
              setOpen(!open);
              setToggle(false);
            }}
          >
            Overview
          </NavLink>

          <NavLink
            to={"#"}
            onClick={() => {
              setOpen(!open);
              setToggle(false);
            }}
          >
            FAQs
          </NavLink>
          <NavLink
            to={"#"}
            onClick={() => {
              setOpen(!open);
              setToggle(false);
            }}
          >
            Contact
          </NavLink>*/
