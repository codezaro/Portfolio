import React from "react";
// import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
export const Navbar = () => {
  return (
    <>
      <section className="flex justify-between  p-5 items-center  bg-gradient-to-b from-[#c3436f] to-white-500">
        <div>
          <img
            className="h-[140px] w-[150px]"
            src="/public/Images/avatar.png"
            alt=""
          />
        </div>
        <div className="flex gap-10 font-semibold text-xl pb-[45px] item-center mr-8 ">
          <div className="flex gap-1 cursor-pointer">
            {/* <CiUser  /> */}
            <FaRegUser className="text-2xl " />
            About
          </div>
          <div className="flex gap-1 cursor-pointer">
            <IoDocumentText className="text-2xl" />
            Resume
          </div>
          <div className="flex gap-1 cursor-pointer">
            {/* <IoIosMail className="text-2xl mt-0.5" /> */}
            <MdAlternateEmail className="text-2xl mt-0.5" />
            Contact
          </div>
        </div>
      </section>
    </>
  );
};
