import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'
import './tab.css'

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        name: "Akshay",
        age: "29",
        email: "akshay@gmail.com",
        interests: ["coding", "music"],
        theme: "dark"
    })
    const [errors, setErrors] = useState({});
    const tabs = [
         {
            name: "Profile",
            Component: Profile,
            validate: () => {
                const err = {};
                if(!data.name || data.name.length < 2){
                    err.name = "Name is not valid"
                }
                if(!data.age || data.age < 18){
                    err.age = "Age is not valid"
                }
                if(!data.email || data.email < 2){
                    err.age = "Email os not valid"
                }
                setErrors(err);
                return err.name || err.age || err.email ? false : true;
            }
        },
        {
            name: "Interest",
            Component: Interest,
            validate: () => {
                const err = {};
                if(data.interests.length < 1){
                    err.interests = "Select at least one interest"
                }
                setErrors(err);
                return err.interests  ? false : true;
            }
        },
        {
            name: "Settings",
            Component: Settings,
            validate: () => {
                return true;
            }
        }
    ]
    console.log(tabs.length);
    
    const ActiveTabComponent = tabs[activeTab].Component;

    const handlePrev = () => {
        if(tabs[activeTab].validate()){
            setActiveTab(prev => prev - 1);
        }
    }

    const handleNext = () => {
        if(tabs[activeTab].validate()){
            setActiveTab(prev => prev + 1)
        }
    } 

    return (
        <div>
            <div className='heading-container'>
                {
                    tabs.map((t, index) => (
                        <div key={index} className='heading' onClick={() => tabs[activeTab].validate() && setActiveTab(index)}>{t.name}</div>
                    ))
                }
            </div>
            <div className='tab-body'>
                <ActiveTabComponent data={data} setData={setData} errors={errors}/>
            </div>

                
            <div>
                {activeTab > 0 && <button onClick={handlePrev}>Previous</button>}
                {activeTab < tabs.length - 1 && <button onClick={handleNext}>Next</button>}
                {activeTab == tabs.length - 1 && <button>Submit</button>}
            </div>

        </div>
    )
}

export default TabForm