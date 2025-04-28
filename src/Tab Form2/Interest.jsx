import React from 'react'

const Interest = ({data, setData, errors}) => {

    const {interests} = data;
    console.log(data);
    
    const handleInputChange = (e, name) => {
        setData((prevData) => (
            {
                ...prevData,
                interests: e.target.checked ? [...prevData.interests, name] : prevData.interests.filter((fi) => fi !== name)
            }
        ))
    }

    return (
        <div>
            <div>
                <label>
                    <input type="checkbox" name='coding' checked={interests.includes("coding")} onChange={(e) => handleInputChange(e, "coding")}/>
                    Coding
                </label>
            </div>

            <div>
                <label>
                    <input type="checkbox" name='coding' checked={interests.includes("music")} onChange={(e) => handleInputChange(e, "music")}/>
                    Music
                </label>
            </div>

            <div>
                <label>
                    <input type="checkbox" name='javascript' checked={interests.includes("javascript")} onChange={(e) => handleInputChange(e, "javascript")}/>
                    Javascript
                </label>
            </div>
            {errors.interests && <span className='error'>{errors.interests}</span>}
        </div>
    )
}

export default Interest