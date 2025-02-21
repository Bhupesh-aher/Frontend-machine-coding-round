import { useEffect, useState } from "react";

const useFetchData = () => {

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=500");
        const json = await data.json();
        setProducts(json.products)
      }
    
      useEffect(() => {
        fetchData();
      }, [])

      return products;
}

export default useFetchData;
