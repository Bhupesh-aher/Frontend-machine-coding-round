import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const OTP_DIGITS_COUNT = 5;

const InputOTP = () => {

    const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));
    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0]?.focus();
    }, [])

    const handleOnChnage = (value, index) => {
       if(isNaN(value)) return;

       const newArr = [...inputArr];
       const newValue = value.trim();

       newArr[index] = newValue.slice(-1);
       setInputArr(newArr);
       newValue && refArr.current[index+1]?.focus();
    }

    const handleOnKeyDown = (e, index) => {
        if(!e.target.value && e.key === "Backspace"){
            refArr.current[index - 1]?.focus();

        }
    }

    return (
        <div>
            <h1>OTP Input</h1>

            {
                inputArr.map((input, index) => (
                    <input className='otp-input' key={index} type="text" 
                        value={inputArr[index]} 
                        onChange={(e) => handleOnChnage(e.target.value, index)}
                        ref={(input) => (refArr.current[index] = input)}
                        onKeyDown={(e) => handleOnKeyDown(e, index)}
                        />
                ))
            }
        </div>
    )
}

export default InputOTP