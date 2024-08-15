
import React,{useState,useEffect} from "react";

export const Categories = () => {
    const[categories,setCategories ] = useState([]);

    const fetchCategories = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products/category-list");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setCategories(data);
          
        } catch (error) {
          console.error('Failed to fetch categories:', error);
        }
      };
    
      useEffect(() => {
        fetchCategories();
      }, []);
      categories.length=5
      categories.push("more")
      console.log(categories);

  return (
    <div id="Categories" className="bg-slate-950 flex justify-center ">
      <ul className="menu menu-vertical lg:menu-horizontal bg-slate-900 opacity-80 rounded-box">
        {categories.map((category) => (
          <li key={category}>
            <a>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
