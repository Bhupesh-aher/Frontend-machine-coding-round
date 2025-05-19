import React, { useRef } from 'react'

const InputFocus = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    return (
        <div style={{padding: "20px", textAlign: "center"}}>

            <input ref={inputRef} type="text" placeholder='Type Here' style={{padding: "8px", fontSize: "16px", marginRight: "10px"}}/>
            
            <button onClick={handleClick} style={{padding: "8px 12px"}}>Focus Input</button>
        </div>
    )
}

export default InputFocus