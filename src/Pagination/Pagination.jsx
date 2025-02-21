import React, { useEffect, useState } from 'react'
import './pagination.css'

const ProductCard = ({productInfo}) => {

  const {title, thumbnail} = productInfo
  return (
    <div className='product-card'>
      <img src={thumbnail} alt={title} className='product-img'/>
      <span>{title}</span>
    </div>
  )
}

const PAGE_SIZE = 10;

const Pagination = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * 10
  const end = start + 10;

  const handlePageChange = (n) => {
    setCurrentPage(n)
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const goToPreviousPage = () =>{
    setCurrentPage((prev) => prev - 1)
  }
  
  
  return !products.length ? (
      <h1>No Products Found</h1>
    ) : (
    <div className='app'>
      <h1>Pagination</h1>
      <div className='pagination-container'>
        <button disabled={currentPage === 0} className='page-number' onClick={goToPreviousPage}>◀️</button>
        {
          [...Array(noOfPages).keys()].map(n => (
            <button className={"page-number " + (n === currentPage ? "active" : "")}key={n} onClick={() => handlePageChange(n)}>{n}</button>
        ))}
        <button disabled={currentPage === noOfPages-1} className='page-number' onClick={goToNextPage}>▶️</button>
      </div>
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