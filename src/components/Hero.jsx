import React from "react";
import { LampDemo } from "./ui/Lamp";
import { Navigate } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <LampDemo />
        <button className=" absolute bottom-40 z-40 btn btn-outline md:btn-lg btn-info" onClick={()=>Navigate('/products')}>All prodacts</button>
        
      </div>
    </>
  );
};
