import React from "react";

export const GlassCard = () => {
  return (
    <div className="text-xl bg-slate-950 flex  items-center justify-center sm:flex-row ">
      <div className="card  bg-base-100 image-full w-64   sm:w-96 shadow-xl hover:scale-110 hover:transition-all transition-all"
        style={{background: 'rgb(90,45,208)',backgroundColor: 'linear-gradient(137deg, rgba(20,45,208,1) 6%, rgba(21,21,79,1) 49%, rgba(0,0,0,0.9133019607843137) 100%)'}}
      >
        {/* <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center sm:justify-end">
            <button className="btn btn-sm btn-primary sm:btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
