import React, { useState } from 'react'
import "./style.css"

const defaultFruits = [
  "Banana",
  "Apple",
  "Cherry",
  "Mango",
  "Blueberry",
  "Kiwi",
  "Pineapple",
  "Fig",
];

const ListSorter = () => {
    const [list, setList] = useState(defaultFruits);
    const [sortType, setSortType] = useState("az");

    const sortList= (type) => {
        let sortedList = [...list];
        if(type === "az"){
            sortedList.sort((a, b) => a.localeCompare(b));
        }
        else if(type === "za"){
            sortedList.sort((a, b) => b.localeCompare(a));
        }
        else if(type === "length"){
            sortedList.sort((a,b) => a.length - b.length);
        }
        setList(sortedList);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSortType(value);
        sortList(value);
        
    }

    return (
        <div className='container' style={{maxWidth: "400", margin: "20px auto"}}>
            <h1>List Sorter</h1>
                <label htmlFor="sort">Sort By</label>
                <select id="sort" value={sortType} onChange={handleChange}>
                    <option value="az">A - Z(Alphabetical)</option>
                    <option value="za">Z - A(Reverse Alphabetical)</option>
                    <option value="length">Length (Shortest First)</option>
                </select>

                <ul className='list'>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                
        </div>
    )
}

export default ListSorter