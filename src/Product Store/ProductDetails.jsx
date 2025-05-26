import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {productId} = useParams();
    const[product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fecthData = async() => {
            try {
                const data = await fetch(`https://dummyjson.com/products/${productId}`)
                if(!data.ok) throw new Error("Failed to fetch details");
                const json = await data.json();
                setProduct(json);
            } catch (error) {
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }

        fecthData();
    }, [productId]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <div className='product-details'>
            {product ? (
                <div>
                    <h3>{product.title}</h3>
                    <img className='product-image' src={product.thumbnail} alt={product.title}  />
                    <p>{product.description}</p>
                    <p><strong>PriceL</strong>${product.price}</p>
                    <Link to={"/products"} className = 'back-to-products'>Back to Products</Link>

                </div>
            ) : (
            <p>Product not found</p>
            )}
        </div>
    )
}

export default ProductDetails