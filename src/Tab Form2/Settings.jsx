import React from 'react'

const Settings = ({data, setData}) => {
    
    const {theme} = data;
    const handdleDataChange = (e, value) => {
        setData((prevData) => (
            {
                ...prevData,
                theme: value
            }
        ))
    }

    return (
        <div>
                <div>
                    <label>
                        <input type="radio" name='dark' checked={theme === "dark"} onChange={(e) => handdleDataChange(e, "dark")}/>
                        Dark
                    </label>
                </div>

                <div>
                    <label>
                        <input type="radio" name='light' checked={theme === "light"} onChange={(e) => handdleDataChange(e, "light")}/>
                        Light
                    </label>
                </div>
        </div>
    )
}

export default Settings