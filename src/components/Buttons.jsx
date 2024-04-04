import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Document, Page } from "react-pdf";

export const Buttons = () => {
  //   const PDF_FILE = () => {
  //     <Document file="./HarsimranResume.pdf">
  //       <Page />
  //     </Document>;
  //   };

  const handleDownload = () => {
    const url = "./HarsimranResume.pdf";
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
