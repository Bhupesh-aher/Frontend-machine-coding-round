import React, { useState } from 'react'
import "./style.css"


const ChipsInput = () => {

    const[inputText, setInputText] = useState('');
    const[chips, setChips] = useState([]);

    const handleChange = (event) => {
        if(event.key === "Enter" && inputText.trim() !== ''){
                setChips((prev) => ([...prev, inputText]));
                setInputText('');
        }
    }

    const handleDelete = (chip) => {
        setChips(chips.filter((ch) => ch != chip));
    }


    return (
        <div className='container'>

            <h1>Chips Input</h1>
            <input type="text" className='input' placeholder='Type a chip and press tag' value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleChange}/>
            <div className='chips-container'>
                {
                    chips.map((chip, index) => (
                        <div className='chip' key={index}>
                            <span>{chip}</span>
                            <button onClick={() => handleDelete(chip)}>  x</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChipsInput