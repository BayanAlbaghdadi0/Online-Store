import React, { useEffect, useState } from 'react'
import useGetAllProducts from '../Hooks/useGetAllProducts'
import ProductCard from '../components/ProductCard/ProductCard';
import { NavBar } from '../components/layout/NavBar';

const ProductsPage = () => {
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)
    // const { products, loading } = useGetAllProducts
    // (limit, skip);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    console.log(limit, skip);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setProducts(data.products);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [skip]);

    return (
        <div>
            <NavBar />
            <div className=' flex flex-row  mt-20 gap-11 flex-wrap justify-around '>
                {!loading && products.length > 0 &&
                    products.map((product) => {
                        return (
                            <ProductCard title={product.title} price={product.price} discount={product.discountPercentage} rating={product.rating} thumbnail={product.thumbnail} />
                        )
                    })
                }
                {
                    loading &&
                    <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg px-12 py-10  bg-slate-500 shadow-md">
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                }
            </div>
            <div className='w-60 mx-auto my-10'>
                <div className="join grid grid-cols-2 mt-3 ">
                    <button className="join-item btn btn-outline text-white" onClick={() => { setSkip(skip - limit) }}>Previous page</button>
                    <button className="join-item btn btn-outline text-white" onClick={() => { setSkip(skip + limit) }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage
