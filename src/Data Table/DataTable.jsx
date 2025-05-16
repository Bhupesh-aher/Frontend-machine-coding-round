import React, { useState } from 'react'
import data from "./data.json"
import "./style.css"

const DataTable = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const totalPages = Math.ceil(data.length / pageSize);

    const handlePrevious = () => {
        if(currentPage > 1){
            setCurrentPage(prev => prev - 1);
        }
    }

    const handleNext = () => {
        if(currentPage < totalPages){
            setCurrentPage(prev => prev + 1)
        }
    }
    
    const handlePageSizeChnage = (e) => {
       setPageSize(Number(e.target.value));
       setCurrentPage(1);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const headers = data.length > 0 ?  Object.keys(data[0]) : [];
    const currentData = data.slice(startIndex, startIndex + pageSize);

    
    
    
    return (
        <div>
            <h3>Data Table</h3>
            {data.length === 0 ? <p>No data available</p> : 
            
                <table border='1' cellPadding="10" style={{width: "100%" , borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        {headers.map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                    </tr>
                </thead>

                <tbody>
                    {currentData.map((row, index) => (
                        <tr key={index}>
                            {headers.map((key) => (
                                <td key={key}>{row[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            
            }

            <div style={{marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div>
                        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
                        <span style={{margin: "0 10px"}}>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                    </div>

                    <div>
                        Row per page : {""}
                        <select value={pageSize} onChange={handlePageSizeChnage}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
            </div> 
            
        </div>
    )
}

export default DataTable