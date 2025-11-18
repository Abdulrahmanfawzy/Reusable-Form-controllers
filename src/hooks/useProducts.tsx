import { useEffect, useState } from 'react'

function useProducts() {
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(true);
    
    useEffect(()=>{
        async function getProducts(){
            const data = await fetch(`https://api.escuelajs.co/api/v1/products`);
            const result = await data.json();
            setProducts(result);
            setLoading(false);
        }
        getProducts();
    },[])

    return {products , loading}
}

export default useProducts;
