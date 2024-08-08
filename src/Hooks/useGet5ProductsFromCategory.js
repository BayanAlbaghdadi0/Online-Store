import React, { useState, useEffect } from "react";

export const useGet5ProductsFromCategory = (category, limit, skip) => {
  const [products, setProducts] = useState([]);
  const [loading2, setLoading2] = useState(true);

  const getProductsFromCategory = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
        console.log(error);      
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    getProductsFromCategory();
  }, [category, limit, skip]);

  return { products, loading2 };
};
