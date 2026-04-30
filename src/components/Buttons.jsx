import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Buttons = () => {
  const handleDownload = () => {
    const url = `${import.meta.env.BASE_URL}Harsimran_Arora_resume.pdf`;
    const fileName = "Harsimran_Arora_resume.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.style.display = "none";
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  return (
    <div className="mx-auto flex flex-row gap-6 font-medium justify-center  ">
      <div>
        <button
          onClick={handleDownload}
          className=" border rounded-lg font-semibold text-xl"
        >
          Download Resume
        </button>
      </div>
      <div className="cursor-pointer ">
        <div className=" text-2xl">
          <a href="https://github.com/codezaro">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="cursor-pointer text-2xl">
        <a href="https://www.linkedin.com/in/harsimrankaurcd/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
