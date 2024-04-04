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
      <section className="h-[100vh] w-[100vw]">
        <Navbar
          scrollAboutHandler={scrollAboutHandler}
          scrollResumeHandler={scrollResumeHandler}
          scrollContactHandler={scrollContactHandler}
        />
        <Container />
      </section>
      <section ref={section2} className="h-[100vh] w-[100vw]">
        <Mea />
      </section>
      <section ref={section3} className="h-[142vh] w-[100vw] ">
        <div className="h-[150vh] w-[60vw] pt-[120px] mx-auto flex flex-row">
          <img src="./Images/Harsimran-Arora-Resume.jpg" alt="" />
        </div>
      </section>
      <section ref={section4}>
        <Buttons className="" />
      </section>
    </>
  );
};

export default App; // Exporting App as default
