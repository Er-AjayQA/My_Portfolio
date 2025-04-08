"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { FaBlog } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import { ThemeMode } from "./Mode";

export const Header = () => {
  return (
    <>
      <div>
        <div className="py-3 px-2">
          <ThemeMode />
        </div>
        <h1 className="pt-[2rem] text-center text-[#fff] text-[1.5rem] font-semibold">
          Ajay Kumar
        </h1>
        <nav>
          {/* Mobile menu toggle button Start */}
          <button className="md:hidden fixed top-4 left-4 z-30">
            <GiHamburgerMenu />
          </button>
          {/* Mobile menu toggle button End */}

          {/* Mode Button Start */}
          {/* Mode Button End */}

          {/* Profile Start */}
          <div className="flex flex-col items-center justify-center py-[1.8rem] px-[1rem] grow">
            <div className="flex flex-col items-center justify-center gap-3">
              {/* Profile Image Start */}
              <div className="flex w-[160px] h-[160px] overflow-hidden rounded-[50%] p-2 mb-3">
                <img
                  src="/images/profile.png"
                  alt="User Image"
                  className="w-[100%]"
                />
              </div>
              {/* Profile Image End */}

              {/* Profile Bio Start */}
              <div className="text-[#fff] text-[.8rem] text-center mb-3">
                Hi, my name is Ajay Kumar and I'm a Manual QA & software
                engineer. Welcome to my personal website!
              </div>
              {/* Profile Bio End */}

              {/* Profile Social Start */}
              <ul className="flex py-3 mb-3 w-full justify-center">
                <li className="me-3">
                  <Link
                    href="#"
                    className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center text-[#40976F] hover:bg-[#fffc] hover:text-[#40976f] transition-all duration-300 ease-in-out"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="me-3">
                  <Link
                    href="#"
                    className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center text-[#40976F] hover:bg-[#fffc] hover:text-[#40976f] transition-all duration-300 ease-in-out"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="me-3">
                  <Link
                    href="#"
                    className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center text-[#40976F] hover:bg-[#fffc] hover:text-[#40976f] transition-all duration-300 ease-in-out"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li className="me-3">
                  <Link
                    href="#"
                    className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center text-[#40976F] hover:bg-[#fffc] hover:text-[#40976f] transition-all duration-300 ease-in-out"
                  >
                    <FaStackOverflow />
                  </Link>
                </li>
                <li className="me-3">
                  <Link
                    href="#"
                    className="w-[2rem] h-[2rem] bg-white rounded-[50%] flex justify-center items-center text-[#40976F] hover:bg-[#fffc] hover:text-[#40976f] transition-all duration-300 ease-in-out"
                  >
                    <FaCodepen />
                  </Link>
                </li>
              </ul>
              {/* Profile Social End */}
            </div>

            {/* Menu Section Start */}
            <ul>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-3 font-bold gap-2 text-white text-[1rem] hover:text-black"
                >
                  <FaUser /> <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-3 font-bold gap-2 text-white text-[1rem] hover:text-black"
                >
                  <FaLaptopCode /> Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-3 font-bold gap-2 text-white text-[1rem] hover:text-black"
                >
                  <IoMdPaper /> Resume
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-3 font-bold gap-2 text-white text-[1rem] hover:text-black"
                >
                  <FaBlog /> Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-3 font-bold gap-2 text-white text-[1rem] hover:text-black"
                >
                  <TiContacts /> Contact
                </Link>
              </li>
            </ul>
            {/* Menu Section End */}

            {/* Hire Me Button Start */}
            <div className="mt-3">
              <Link
                href="#"
                className="py-2 px-5 bg-[#0000004d] text-white font-bold rounded-[10px] flex gap-2 items-center"
              >
                <FaPaperPlane /> <span>Hire Me</span>
              </Link>
            </div>
            {/* Hire Me Button Start */}
          </div>
          {/* Profile End */}
        </nav>
      </div>
    </>
  );
};
