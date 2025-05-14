import React from 'react'
import Tabs from './Tabs'
import "./style.css"

const TabsCom = () => {
    const tabsData = [
        {
            title: "Tab 1",
            content: "This is the content of tab 1"
        },
        {
            title: "Tab 2",
            content: "This is the content of tab 2"
        },
        {
            title: "Tab 3",
        }
    ]
    return (
            <Tabs data={tabsData}/>
    )
}

export default TabsCom