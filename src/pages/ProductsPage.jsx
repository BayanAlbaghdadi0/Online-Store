import React, { useEffect, useState } from 'react'
import useGetAllProducts from '../Hooks/useGetAllProducts'
import ProductCard from '../components/ProductCard/ProductCard';
import { NavBar } from '../components/layout/NavBar';
import { Lodar } from '../components/Lodar';
const ProductsPage = () => {
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)

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
                            <ProductCard id={product.id} title={product.title} price={product.price} discount={product.discountPercentage} rating={product.rating} thumbnail={product.thumbnail} />
                        )
                    })
                }
                {
                    loading &&
                    <div className='w-full h-full flex justify-center py-80 items-center'>
                        <Lodar />
                    </div>
                }
            </div>
            {
                !loading &&
                <div className='w-60 mx-auto my-10'>
                    <div className="join grid grid-cols-2 mt-3 ">
                        <button className="join-item btn btn-outline text-white" onClick={() => { setSkip(skip - limit) }}>Previous page</button>
                        <button className="join-item btn btn-outline text-white" onClick={() => { setSkip(skip + limit) }}>Next</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductsPage
