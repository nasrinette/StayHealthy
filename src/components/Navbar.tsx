import logo from "../assets/icon.svg";
import AppButton from "./AppButton";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Reviews", link: "/reviews" },
    { name: "Health Blog", link: "/blog" },
    { name: "Appointments ", link: "/appointments" },
  ];
  const menuClasses = isOpen ? "flex flex-col space-y-4" : "hidden";

  return (
    <nav className="bg-gradient-to-r from-light  to-white xl:px-20 px-10 z-20 p-3 fixed top-0 left-0 w-full ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className={` cursor-pointer flex items-center`}>
          <img src={logo} className="lg:w-10 w-8" alt="logo" />
          <p className="font-title text-2xl lg:text-3xl font-semibold text-mainBlue ml-2 mr-10">
            StayHealthy
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-mainBlue text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineCloseCircle /> : <TiThMenu />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${menuClasses} md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-light via-light to-white  shadow-md py-4 px-10`}
        >
          {links.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              className={`block ${
                location.pathname === link.link ? "text-mainBlue" : "text-gray"
              } `}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className={`block ${
              location.pathname === "/login" ? "text-mainBlue" : "text-gray"
            } `}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className={`block ${
              location.pathname === "/signup" ? "text-mainBlue" : "text-gray"
            } `}
          >
            Sign up
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              className={`text-sm lg:text-base text-center font-body font-light  ${
                location.pathname === link.link ? "text-mainBlue" : "text-gray"
              } `}
            >
              {link.name}
            </Link>
          ))}
          <AppButton
            onClick={() => {
              navigate("/login");
            }}
            className="px-6 py-2 mr-2"
          >
            Log in
          </AppButton>
          <AppButton
            onClick={() => {
              navigate("/signup");
            }}
            className="px-6 py-2"
          >
            Sign up
          </AppButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
