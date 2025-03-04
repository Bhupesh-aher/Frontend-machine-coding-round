import React, { useEffect, useState } from 'react'
import "./click.css"

const ClickBox = () => {

    const [data, setData] = useState([
        {
            id: 1,
            isClicked: false,
            isVisible : true 
        }, 
        {
            id: 2,
            isClicked: false,
            isVisible: true
        },
        {
            id: 3,
            isClicked: false,
            isVisible: true
        },
        {
            id: 4,
            isClicked: false,
            isVisible: true
        },
        {
            id: 5,
            isClicked: false,
            isVisible: false
        },
        {
            id: 6,
            isClicked: false,
            isVisible: false
        },
        {
            id: 7,
            isClicked: false,
            isVisible: true
        },
        {
            id: 8,
            isClicked: false,
            isVisible: true
        },
        {
            id: 9,
            isClicked: false,
            isVisible: true
        },
    ])

    const [queue, setQueue] = useState([])


    const handleClick = (index) => {
        setData(prev => prev.map((item, idx) => idx === index ? {...item, isClicked: true} : item))
        setQueue(prev => [...prev, index])
    }

 

    useEffect(() => {
        if(queue.length === 7) {
            for(let i = 0; i<queue.length; i++) {
                 setTimeout(() => {
                    setData(prev => 
                        prev.map((item, index) => 
                            index === queue[i] ? {...item, isClicked: false} : item
                        )
                    )
                    setQueue(prev => prev.slice(1))
                }, i * 1000)
            }
        }
        
    }, [queue.length])
   
    
  return (
    <div className='body'>
        <div className='container'>
            {data.map((item, index) => {
                return (
                    item.isVisible === true ? <div key={index} className={`box ${item.isClicked === false ? 'yellow' : 'green'}`} onClick={() =>  handleClick(index)}>{item.id}</div> : <div key={index} ></div>
                )
            })}
        </div>

    </div>
  )
}

export default ClickBox