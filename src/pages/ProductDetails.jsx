import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/layout/NavBar'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating/Rating'
const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [fixedRating, setFixedRating] = useState(0)
    const images = product.images

    const getProductDetails = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
            setFixedRating(data.Rating)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProductDetails();
        console.log(product);

    }, [id]);
    return (
        <div className="font-sans">
            <NavBar />
            <div className="p-4 mt-16 text-white lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="min-h-[500px] lg:col-span-3 bg-slate-600
                     rounded-lg w-full lg:sticky top-0 text-center p-6">
                        <img src={product.thumbnail} loading='lazy' alt="Product" className="w-3/5 rounded object-cover mx-auto py-6" />

                        <hr className="border-white border my-6" />

                        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
                            {
                                images && images.length > 0 && images.map((image) => {
                                    return (
                                        <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-slate-400 p-3 rounded-lg">
                                            <img src={image} alt="Product1" loading='lazy ' className="w-full h-full cursor-pointer" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-white">{product.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-white text-xl font-bold">${product.price}</p>
                            <p className="text-white text-xl"> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div className="flex space-x-2 mt-4">
                            {
                                fixedRating > 0 &&
                                <Rating stars={Math.round(fixedRating)} />
                            }

                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white">About the product</h3>
                            <p className="space-y-3 list-disc my-4 pl-4 text-sm text-white">
                                {product.description}
                            </p>
                        </div>

                        <button type="button" className="flex items-center justify-center 
                        w-full rounded-md bg-slate-900 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-2 ">Add to cart</button>


                        <div className="flex items-start mt-8">

                            <div className="ml-3">
                                <h4 className="text-sm font-bold">John Doe</h4>
                                <div className="flex space-x-1 mt-1">
                                    <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                                </div>
                                <p className="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                            </div>
                        </div>
                        <button type="button" className="w-full mt-8 px-4 py-2.5 bg-transparent border border-orange-400 text-gray-800 font-semibold rounded-lg">Read all reviews</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails
