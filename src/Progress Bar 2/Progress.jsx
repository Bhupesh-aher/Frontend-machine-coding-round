import React, { useEffect, useState } from 'react'
import "./index.css"

const ProgressBar = ({ progress }) => {

    const[progres, setProgres] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgres(progress)
        }, 200)
    }, [progress])

    return (
        <div className='outer'>
            <div className='inner' 
            style={{
                // width: `${progress}%`, 
                transform: `translateX(${progres - 100}%)`,
                color: progres < 5 ? "black" : "white"
                }} 
                role='progressbar' aria-valuenow={progres} aria-valuemax="100" aria-valuemin="0" > 
                {progres}% 
            </div>
        </div>
    )
}

const Progress = () => {

    const bars = [1, 5, 10, 30, 50, 70, 90, 100];

    return (
        <div>
            <h1>Progress Bar</h1>
            {
                bars.map((value) => (
                    <ProgressBar key={value} progress={value}/>
                ))
            }
        </div>
    )
}

export default Progress