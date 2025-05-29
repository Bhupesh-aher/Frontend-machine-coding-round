import React, { useEffect, useState } from 'react'
import "./style.css"

const TrafficLight = () => {
    const [currentLight, setCurrentLight] = useState("red")

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentLight((prevLight) => (prevLight == "red" ? "green" : prevLight == "green" ? "yellow" : "red"))
        }, 5000)
    }, [])
    return (
        <div className='container'>
            <div className='traffic-light'>
                <div className={`light red ${currentLight == "red" ? 'active' : ''}`}></div>
                <div className={`light yellow ${currentLight == "yellow" ? 'active' : ''}`}></div>
                <div className={`light green ${currentLight == "green" ? 'active' : ''}`}></div>
            </div>

        </div>
    )
}

export default TrafficLight