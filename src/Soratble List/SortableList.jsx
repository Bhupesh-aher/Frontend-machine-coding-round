import React, { useState } from 'react'
import "./style.css"

const SortableList = () => {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        if(inputText){
            setItems((prev) => ([...prev, inputText]));
            setInputText("");
        }
    }

    const sortItems = (order) => {
        setItems((prev) => {
            const sortedItems = [...prev];
            sortedItems.sort((a, b) => {
                if(order === 'asc'){
                   return a.localeCompare(b);
                }
                else {
                    return b.localeCompare(a);
                }
            })
            return sortedItems;
        })
    }

    return (
        <div className='sortable-list-container'>
            <h3>Sortablde List</h3>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Add a new item'/>
            <button onClick={handleAddItem}>Add Item</button>

            <div>
                <button onClick={() => sortItems('asc')}>Sort Ascending</button>
                <button onClick={() => sortItems('desc')}>Sort Descending</button>
            </div>

            <div className='list-items'>
                {items.map((item, index) => (
                    <li key={index} id={`item-${index}`}>{item}</li>
                ))}
            </div>
        </div>
    )
}

export default SortableList