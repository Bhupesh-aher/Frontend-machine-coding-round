import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

const OPTIONS = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5",
    "option 6",
]

const MultiSelectDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);
    const dropdownRef = useRef(null);


    const toggleDropDown = () => setIsOpen((prev) => !prev);

    const handleReset = () => {
        setSelectedOptions([]);
        setError("");
        setResult(null);
    }

    const handleSelect = (option) => {
        setSelectedOptions((prev) => prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]);
    }

    const handleSubmit = () => {
        setIsOpen(false);

        if(selectedOptions.length === 0){
            setError("Please select at least one option");
            setResult(null);
        }
        else {
            setError("");
            setResult(selectedOptions);
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, []);

    return (
        <div className='dropdown-container'>
            <h2>Mulitselect Dropdown Menu</h2>

            <label>Select options: </label>

            <div className='dropdown-wrapper' ref={dropdownRef}>
                <button className='dropdown-toogle' onClick={toggleDropDown}>
                    <span>{isOpen ? "⬆️" : "🔽"}</span>
                    <span>{selectedOptions.length > 0 ? `${selectedOptions.length} selected` : "choose options"}</span>
                </button>

                {isOpen && (
                    <ul className='dropdown-menu'>
                        {/* Reset button */}
                        <li className='dropdwon-reset' onClick={handleReset}>Reset Selection</li>
                        
                        {OPTIONS.map((option) => (
                            <li className='dropdown-option' key={option} onClick={() => handleSelect(option)}>
                                <input type="checkbox" checked={selectedOptions.includes(option)} readOnly/>
                                <span className='option-label'>{option}</span>
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>

            <button className='submit-button' onClick={handleSubmit}>Submit</button>

            <div className='result-area'>
                {error && (
                    <p className='error-message'>{error}</p>
                )}
                {result && (
                    <div className='selected-options'>
                        <strong>Selected:</strong> {result.join(", ")}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MultiSelectDropDown