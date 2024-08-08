import React from "react";
import { LampDemo } from "./ui/Lamp";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <LampDemo />
        <button className=" absolute bottom-40 z-40 btn btn-outline md:btn-lg btn-info" onClick={() => navigate('/products')}>All prodacts</button>

      </div>
    </>
  );
};
