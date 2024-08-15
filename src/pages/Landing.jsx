import React from "react";
import { NavBar } from "../components/layout/NavBar";
import { Hero } from "../components/Hero";
import { Overview } from "../components/Overview";
import { AboutUS } from "../components/AboutUS";
import { Footer } from "../components/Footer";
// import { Categories } from '../components/Categories'

export const Landing = () => {
  return (
    <div>
      <div className="flex flex-col  text-center bg-slate-950">
        <NavBar></NavBar>
        <Hero />

        {/* <Categories/> */}
        <Overview />
        <AboutUS />
        <Footer/>
      </div>

    </div>
  );
};
