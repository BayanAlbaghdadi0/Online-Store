import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllProducts = (limit, skip) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    console.log(limit , skip);
    
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
    }, []);

    return { loading, products };
};
export default useGetAllProducts;
