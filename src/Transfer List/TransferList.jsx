import React, { useState } from 'react'
import "./style.css"


const TransferList = () => {
    
    const [availableItems, setAvailableItems] = useState(["Item A", "Item B", "Item C"]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [checked, setChecked] = useState({});

    const handleCheck = (item) => {
        setChecked((prev) => ({...prev, [item]: !prev.item}))
    }

    const moveToSelected = () => {
        const toMove = availableItems.filter((item) => checked[item]);
        setSelectedItems((prev) => [...prev, ...toMove]);
        setAvailableItems((prev) => prev.filter((item) => !checked[item]));
        resetChecked(toMove);
    }

    const moveToAvailable = () => {
        const toMove = selectedItems.filter((item) => checked[item]);
        setAvailableItems((prev) => [...prev, toMove]);
        setSelectedItems((prev) => prev.filter((item) => !checked[item]));
        resetChecked(toMove)
    }

    const resetChecked = (items) => {
        setChecked((prev) => {
            const newChecked = {...prev};
            
            items.forEach((item) => {
                delete newChecked[item];
            })

            return newChecked;
        })
        
    }

    return (
        <div className='container'>
            <div>
                <h3>Available</h3>
                {
                    availableItems.map((item) => (
                        <div key={item}>
                            <label>
                                <input type="checkbox" checked={checked[item] || false} onChange={() => handleCheck(item)}/>
                                {item}
                            </label>
                        </div>
                    ))}
            </div>

            <div>
                <button onClick={moveToSelected}> ▶</button>
                <br/>
                <button onClick={moveToAvailable}>◀</button>
            </div>

            <div>
                <h3>Selected</h3>
                {
                    selectedItems.map((item) => (
                        <div key={item}>
                            <label>
                                <input type="checkbox" checked={checked[item] || false} onChange={() => handleCheck(item)}/>
                                {item}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TransferList