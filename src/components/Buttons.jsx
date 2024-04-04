import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Buttons = () => {
  const PDF_FILE = "./public/HarsimranResume.pdf";
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="mx-auto flex flex-row gap-6 font-medium justify-center  ">
      <div>
        <button
          onClick={() => handleDownload(PDF_FILE)}
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
