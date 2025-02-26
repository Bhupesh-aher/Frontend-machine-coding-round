import React, { useState } from 'react'
import "./tab.css"
import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'

const TabForm = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        name : "akshay",
        age : "29",
        email: "akshay@gmail.com",
        interest: ["coding", "music"],
        theme: 'dark',
    })
    const tabs = [
        {
            name : "Profile",
            component : Profile,
            validate: () => {
                const err = {}
                if(!data.name || data.name.length < 2){
                    err.name = "Name is not valid"
                }
                if(!data.age || data.age < 18){
                    err.age = "Age is not valid"
                }
                if(!data.email || data.email.length < 2){
                    err.age = "Email is not valid"
                }
                setErrors(err)
                
                return err.name || err.age || err.email ? false : true

            }
        },
        {
            name : "Interest",
            component : Interest,
            validate : () => {
                const err = {}
                if(data.interest.length < 1){
                    err.interest = "Select atleast one interest"
                }
                console.log(errors);
                
                return err.interest ? false : true
            }
        },
        {
            name : "Settings",
            component : Settings,
            validate : () => {
                return true
            }
        }
    ]
    const [errors, setErrors] = useState({})
    

    const ActiveTabComponent = tabs[activeTab].component

    const handlePrev = () => {
        setActiveTab((prev) => prev - 1)
    }

    const handleNext = () => {
        if(tabs[activeTab].validate()){
            setActiveTab((prev) => prev + 1)
        }
    }

    const handleSubmit = () => {
        // Make API call to submit the data
        console.log(data);
    }

    return (
        <div>
            <div className='heading-container'>
                {tabs.map((t, index) => (
                    <div key={index} onClick={() => tabs[activeTab].validate() && setActiveTab(index)} className='heading'>{t.name}</div>
                ))}
            </div>
            <div className='tab-body'>
                <ActiveTabComponent data={data} setData={setData} errors={errors}/>
            </div>

        <div className='buttons'>
            <div>
                {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
            </div>

            <div>
                {activeTab < tabs.length - 1 && <button onClick={handleNext}>Next</button>}
            </div>

            <div>
                {activeTab === tabs.length - 1 && <button  onClick={handleSubmit}>Submit</button>}
            </div>
        </div>

        </div>
    )
}

export default TabForm