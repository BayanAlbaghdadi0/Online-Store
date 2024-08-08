import React, { useState, useEffect } from "react";
import { GlassCard } from "./ui/GlassCard";
import { Lodar } from "./Lodar";
// custom hook
import { useGetAllCategories } from "../Hooks/useGetAllCategories";

export const Overview = () => {
  const { loading, categories } = useGetAllCategories();
  const {category , setCategory} = useState("mens-shirts")
  const { products, loading2 } = useGetAllCategories(category, 5, 1);

  


  return (
    <>
      {loading && <Lodar />}

      {!loading && (
        <div className="bg-slate-950 flex justify-center mb-4">
          <ul className="menu menu-vertical flex lg:menu-horizontal bg-slate-900 opacity-80 rounded-box">
            {categories.map((category) => (
              <li key={category}>
                <a onClick={() => setCategory(category)} >{category}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className=" flex justify-evenly bg-slate-950 flex-wrap gap-4">
        {/* category bar */}
        {/* {CARD DISPLAY} */}
        {[0, 1, 2, 3, 4].map((element) => (
          <GlassCard />
        ))}
      </div>
      <q className="text-3xl">anguesa❤️</q>
    </>
  );
};
