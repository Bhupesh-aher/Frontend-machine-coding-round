import React, { useEffect, useState } from 'react'
import "./style.css"



const ClickBox = () => {


    const [data, setData] = useState([
        {
            id: 1,
            color: "yellow",
            isVisible: true
        },
        {
            id: 2,
            color: "yellow",
            isVisible: true
        },
        {
            id: 3,
            color: "yellow",
            isVisible: true
        },
        {
            id: 4,
            color: "yellow",
            isVisible: true
        },
        {
            id: 5,
            color: "yellow",
            isVisible: false
        },
        {
            id: 6,
            color: "yellow",
            isVisible: false
        },
        {
            id: 7,
            color: "yellow",
            isVisible: true
        },
        {
            id: 8,
            color: "yellow",
            isVisible: true
        },
        {
            id: 9,
            color: "yellow",
            isVisible: true
        }
    ])
    const [queue, setQueue] = useState([]);

    const handleClick = (item) => {
        setData((prev) => prev.map((it) => it.id == item.id ? {...it, color: "green"} : it))
        setQueue(prev => ([...prev, item.id]));
    }
    console.log(queue);
    

    useEffect(() => {
        if(queue.length == 7){
            for(let i = 0; i<queue.length; i++){
                setTimeout(() => {
                    setData((prev) => prev.map((it) => it.id === queue[i] ? {...it, color: "yellow"} : it))
                    setQueue(prev => prev.slice(1));
                }, i*1000)
            }
        }
    }, [queue])

    return (
        
        <div>
            <div className='coontainer'>
                {
                    data.map((item) => (
                       item.isVisible ?  <div key={item.id} className='box' onClick={() => handleClick(item)} style={{backgroundColor: item.color}}><span>{item.id}</span> </div> : <div>  </div>
                    ))
                }
                
            </div>
        </div>
  )
}

export default ClickBox