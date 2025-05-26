import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        const fetchData = async() => {
        try{
            const data = await fetch("https://dummyjson.com/products");
            if(!data.ok) throw new Error("failed to feetch data");
            const json = await data.json();
            setProducts(json.products);
            }
        catch(err){
            setError(err.message);
            }
        finally{
            setLoading(false);
            }
        }

        fetchData();
    }, []);

    if(loading) return <p>Loading</p>
    if(error) return <p>Error: {error}</p>

    return (
        <div className='products'>
            <h2>Product List</h2>
            <div className='product-List'>
                {products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <img className='product-image' src={product.thumbnail} alt={product.title}  />
                        <div className='product-info'>
                            <h4>{product.title}</h4>
                            <p>{product.description.slice(0, 100)}...</p>
                            <Link to={`/products/${product.id}`} id={`product-${product.id}`}>View More</Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products

