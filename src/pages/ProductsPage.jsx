import React from 'react'
import useGetAllProducts from '../Hooks/useGetAllProducts'
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsPage = () => {
    const { products, loading } = useGetAllProducts();
    console.log(products);

    return (
        <div className=' flex flex-row  flex-wrap  '>
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
    )
}

export default ProductsPage
