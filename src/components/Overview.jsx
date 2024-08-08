import React, { useState, useEffect } from "react";
import { Lodar } from "./Lodar";
import ProductCard from "./ProductCard/ProductCard";
import { useLocation } from "react-router";

// custom hook
import { useGetAllCategories } from "../Hooks/useGetAllCategories";
import { useGet5ProductsFromCategory } from "../Hooks/useGet5ProductsFromCategory";

export const Overview = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { loading, categories } = useGetAllCategories();
  const [category, setCategory] = useState("mens-shirts");
  // console.log(category);
  const { products, loading2 } = useGet5ProductsFromCategory(category, 8, 1);
  // console.log(products);
  // console.log(loading2);

  return (
    <>
      {loading && <Lodar />}

      {!loading && (
        <div className="bg-slate-950 flex justify-center mb-4">
          <ul className="menu menu-vertical flex lg:menu-horizontal bg-slate-900 opacity-80 rounded-box">
            {categories.map((category) => (
              <li key={category}>
                <a onClick={() => setCategory(category)}>{category}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className=" flex justify-evenly bg-slate-950 flex-wrap gap-4 mb-4">
        {/* Category bar */}
        {/* {CARD DISPLAY} */}
        {loading2 && <Lodar />}
        {!loading2 &&
          products.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price}
              discount={product.discountPercentage}
              rating={product.rating}
              thumbnail={product.thumbnail}
            />
          ))}
      </div>
    </>
  );
};
