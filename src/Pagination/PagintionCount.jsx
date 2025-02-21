import React from 'react'
import { PAGE_SIZE } from './constants';

export const PagintionCount = ({currentPage, setCurrentPage,totalProducts}) => {

      const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    

    const handlePageChange = (n) => {
        setCurrentPage(n)
      }
    
      const goToNextPage = () => {
        setCurrentPage((prev) => prev + 1)
      }
    
      const goToPreviousPage = () =>{
        setCurrentPage((prev) => prev - 1)
      }

  return (
    <div className='pagination-container'>
    <button disabled={currentPage === 0} className='page-number' onClick={goToPreviousPage}>◀️</button>
    {
      [...Array(noOfPages).keys()].map(n => (
        <button className={"page-number " + (n === currentPage ? "active" : "")}key={n} onClick={() => handlePageChange(n)}>{n}</button>
    ))}
    <button disabled={currentPage === noOfPages-1} className='page-number' onClick={goToNextPage}>▶️</button>
    </div>
  )
}

export default PagintionCount;