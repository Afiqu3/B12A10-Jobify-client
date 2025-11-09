import React, { useContext, useEffect, useState } from "react";
import Links from "./Links";
import { IoIosMenu } from "react-icons/io";
import { TbXboxXFilled } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router";
import "./links.css";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { motion } from "motion/react";
import logoImg from '../../assets/logo.png';

const navigationData = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "All Jobs",
    path: "/allJobs",
    id: 2,
  },
  // {
  //   name: "Register",
  //   path: "/register",
  //   id: 3,
  // },
  // {
  //   name: "Login",
  //   path: "/login",
  //   id: 4,
  // },
];

const privateNavigationData = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "All Jobs",
    path: "/allJobs",
    id: 2,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //   const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = navigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));
  const privateLinks = privateNavigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    // signOutUser()
    //   .then(() => {
    //     toast.success("Logout Successfully!", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       transition: Bounce,
    //     });
    //   })
    //   .catch(() => {
    //     // console.log(error);
    //   });
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-1000 bg-[#244034] ${
        scrolled ? "shadow-md backdrop-blur" : ""
      }`}
    >
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      <nav
        className={`flex justify-between items-center pt-7 max-w-6xl lg:mx-auto mx-4 md:py-5 ${
          !isOpen ? "pb-7" : ""
        }`}
      >
        <motion.div
          className="flex items-center gap-x-3"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {isOpen ? (
            <TbXboxXFilled
              className="text-4xl text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></TbXboxXFilled>
          ) : (
            <IoIosMenu
              className="text-4xl text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></IoIosMenu>
          )}
          <h3
            className="text-xl font-extrabold"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link to={`/`} className="flex items-center gap-x-1 text-white">
              <img className="w-12 h-12" src={logoImg} alt="" />
              Jobify
            </Link>
          </h3>
        </motion.div>

        <div className="lg:flex gap-x-4 items-center hidden">
          <ul className="lg:flex hidden gap-x-8 font-medium">{links}</ul>
        </div>

        {
          <div className="lg:flex gap-x-4 items-center hidden">
            {/* <ul className="lg:flex hidden gap-x-8 font-medium">{links}</ul> */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-x-2">
                <Link
                  to={"/login"}
                  target="_parent"
                  className="hidden group lg:flex items-center gap-2 bg-[#D2F34C] font-semibold px-6 py-2 rounded-full border-2 border-[#D2F34C] hover:text-[#D2F34C] hover:bg-[#244034] transition-all duration-300 ease-in-out transform cursor-pointer"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to={"/register"}
                  target="_parent"
                  className="hidden group lg:flex items-center gap-2 bg-[#D2F34C] font-semibold px-6 py-2 rounded-full border-2 border-[#D2F34C] hover:text-[#D2F34C] hover:bg-[#244034] transition-all duration-300 ease-in-out transform cursor-pointer"
                >
                  <span>Register</span>
                </Link>
              </div>
            </motion.div>
          </div>
        }
        {/* {user && (
          <div className="flex gap-6 items-center">
            <div className="lg:block hidden">
              <ul className="lg:flex hidden gap-x-8 font-medium">
                {privateLinks}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              >
                <img className="w-12 rounded-full" src={user.photoURL} alt="" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <button
                onClick={handleLogOut}
                className="hidden group lg:flex items-center gap-2 bg-linear-to-r from-[#52057B] to-[#892CDC] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform focus:ring-2 focus:ring-[#892CDC] focus:outline-none cursor-pointer"
              >
                <FiLogOut className="text-white text-lg transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Logout</span>
              </button>
            </motion.div>
          </div>
        )} */}
      </nav>
      {isOpen && (
        <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-45">
          <ul className={`space-y-3 animation`}>{links}</ul>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <Link
                to={"/register"}
                target="_parent"
                className="lg:hidden w-2/3 animation flex items-center justify-center bg-[#D2F34C] font-semibold px-6 py-2 rounded-full border border-[#D2F34C] hover:text-[#D2F34C] hover:bg-[#244034] transition-all duration-300 ease-in-out transform cursor-pointer"
              >
                <span>Register</span>
              </Link>
              <Link
                to={"/login"}
                target="_parent"
                className="lg:hidden w-2/3 animation flex items-center justify-center bg-[#D2F34C] font-semibold px-6 py-2 rounded-full border border-[#D2F34C] hover:text-[#D2F34C] hover:bg-[#244034] transition-all duration-300 ease-in-out transform cursor-pointer"
              >
                <span>Login</span>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
      {/* {isOpen && user && (
        <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-35">
          <ul className={`space-y-3 animation`}>{privateLinks}</ul>
          <button
            onClick={handleLogOut}
            className="animation lg:hidden group flex items-center gap-2 bg-linear-to-r from-[#52057B] to-[#892CDC] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform focus:ring-2 focus:ring-[#892CDC] focus:outline-none cursor-pointer"
          >
            <FiLogOut className="text-white text-lg transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Logout</span>
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
