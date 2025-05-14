import React, { useState } from 'react'


const Tabs = ({data}) => {
    const [currentTab, setCurrentTab] = useState(0);
    

    if(data.length === 0) return <div>No Tabs Available</div>
    return (
        <div className='tabs-container'>
            <div className='tabs'>
                     {data.map((tab, index) => (
                        <div onClick={() => setCurrentTab(index)} key={index} style={{borderBottom:  currentTab === index ? "2px solid blue": "none", padding: "10px 20px"}}>{tab.title || `Tab ${index + 1}`}</div>   
                ))}
            </div>
            <div>
                <p>{data[currentTab]?.content || "No content available"}</p>
            </div>
        </div>
    )
}

export default Tabs