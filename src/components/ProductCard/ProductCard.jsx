import toast from "react-hot-toast";
import { useLocation } from "react-router";
const ProductCard = ({ title, price, discount, rating, thumbnail }) => {
  const fixedRating = Math.round(rating);
  const starRating = Array(fixedRating).fill(1);
  const location = useLocation();

  return (
    <div className="relative w-80 flex  w-70 flex-col overflow-hidden rounded-lg  bg-slate-600 shadow-md ">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover w-72 aspect-square"
          loading="lazy"
          src={thumbnail}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discount}% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-100">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-white">${price}</span>
          </p>
          <div className="flex items-center">
            {starRating.map((star) => {
              return (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              );
            })}

            <span className="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-black text-xs font-semibold">
              {rating}
            </span>
          </div>
        </div>
        {location.pathname === "/products" && (
          <a
            href=""
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => {
              toast.success("Product added successfully");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        )}

        {location.pathname === "/" && (
          <button className="btn  w-full  btn-outline bg-gray-900">Show All products</button>
        )}

        <a
          href=""
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-2 "
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
