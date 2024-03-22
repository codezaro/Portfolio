import React from "react";

export const Container = () => {
  return (
    <>
      <div className="flex flex-col pt-20 mx-10 ">
        <div className="flex mb-[-10px]">
          <p className="text-3xl ">Hello! </p>
          <img
            className="h-[50px] w-[40px] text-10xl pb-4 "
            src="public/Images/wavinghand.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-3xl">
            I'm Harsimran Arora, <br />
            an enthusiastic frontend developer, eager to delve into <br /> web
            development, crafting engaging user experiences with a drive to
            learn and interact.
          </p>
        </div>
      </div>
    </>
  );
};
