import React, { useRef } from "react";
import { Mea } from "./components/Mea";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Document, Page, pdfjs } from "react-pdf";

import { Buttons } from "./components/Buttons";
const App = () => {
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const scrollAboutHandler = () => {
    window.scrollTo({
      top: section2.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollResumeHandler = () => {
    window.scrollTo({
      top: section3.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollContactHandler = () => {
    window.scrollTo({
      top: section4.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="pt-[150px] xl:pt-0 h-[80vh] md:h-[100vh] w-[100vw]">
        <Navbar
          scrollAboutHandler={scrollAboutHandler}
          scrollResumeHandler={scrollResumeHandler}
          scrollContactHandler={scrollContactHandler}
        />
        <Container />
      </section>
      <section
        ref={section2}
        className=" h-[80vh]   sm:h-[100vh] sm:w-[100vw]  "
      >
        <Mea />
      </section>
      <section ref={section3} className="  h-[100vh] md:h-[142vh] w-[100vw]  ">
        <div className=" pt-[150px]  md:h-[150vh] md:w-[60vw]  md:pt-[100px]  mx-auto flex flex-row">
          <img src="./Images/Harsimran-Arora-Resume.jpg" alt="" />
        </div>
      </section>
      <section
        className="h-[30vh] md:h-[0vh] pt-[70px] md:pt-[0px]  "
        ref={section4}
      >
        <Buttons />
      </section>
    </>
  );
};

export default App; // Exporting App as default
