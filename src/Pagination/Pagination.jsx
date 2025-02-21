import React, { useEffect, useState } from 'react'
import './pagination.css'
import ProductCard from './ProductCard';
import PagintionCount from './PagintionCount';
import useFetchData from './useFetchData';



const Pagination = () => {

  const [currentPage, setCurrentPage] = useState(0)

  const products = useFetchData();

  const totalProducts = products.length;
  const start = currentPage * 10
  const end = start + 10;
  
  return !products.length ? (
      <h1>No Products Found</h1>
    ) : (
      <div className='app'>
          <h1>Pagination</h1>
            <PagintionCount currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>
          <div className='products-container'>
            {
              products.slice(start, end).map(p => (
                <ProductCard key={p.id} productInfo={p}/>
            ))}
          </div>
      </div>
  )
}

export default Pagination