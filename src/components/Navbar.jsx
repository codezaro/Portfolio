import React, { useRef } from "react";

import { FaRegUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

import { MdAlternateEmail } from "react-icons/md";
export const Navbar = ({
  scrollAboutHandler,
  scrollResumeHandler,
  scrollContactHandler,
}) => {
  //   const section2 = useRef();

  return (
    <div className="fixed top-0 w-full">
      <section className="flex justify-between flex-wrap p-5 items-center  bg-gradient-to-b from-[#c3436f] to-white-500">
        <div>
          <img
            className="sm:h-[150px] sm:w-[150px]  h-[80px] w-[80px]"
            src="./Portfolio/public/Images/avatar.png"
            alt=""
          />
        </div>
        <div className="flex gap-5 flex-wrap font-semibold text-md sm:text-xl pb-[45px] item-center mr-8 ">
          <div
            onClick={() => scrollAboutHandler()}
            className="flex gap-1 cursor-pointer"
          >
            {/* <CiUser  /> */}
            <FaRegUser className="sm:text-2xl   text-xl" />
            About
          </div>
          <div
            onClick={() => scrollResumeHandler()}
            className="flex gap-1 cursor-pointer"
          >
            <IoDocumentText className="sm:text-2xl text-xl" />
            Resume
          </div>
          <div
            onClick={() => scrollContactHandler()}
            className="flex gap-1 cursor-pointer"
          >
            {/* <IoIosMail className="text-2xl mt-0.5" /> */}
            <MdAlternateEmail className="sm:text-2xl text-xl mt-0.5" />
            Contact
          </div>
        </div>
      </section>
    </div>
  );
};
