import React from "react";
import { LampDemo } from "./ui/Lamp";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <LampDemo />
        <button className=" absolute bottom-40 z-40 btn btn-outline md:btn-lg btn-info">All prodacts</button>
        
      </div>
    </>
  );
};
