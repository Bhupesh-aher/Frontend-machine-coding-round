import React from 'react'

const Interest = ({data, setData, errors}) => {

    const {interest} = data;

    const handleChangeData = (e, name) => {
        
        setData((prev) => ({
            ...prev,
            interest: e.target.checked ? [...prev.interest, name] : prev.interest.filter((i) => i !== name)
        }))
    }
    

  return (
    <div>
        <div>
            <label> 
                <input type="checkbox" name='coding' checked={interest.includes("coding")} onChange={(e) => handleChangeData(e, 'coding')}/>
                Coding
            </label>
        </div>

        <div>
            <label> 
                <input type="checkbox" name='music' checked={interest.includes("music")} onChange={(e) => handleChangeData(e, 'music')}/>
                Music
            </label>
        </div>

        <div>
            <label> 
                <input type="checkbox" name='react' checked={interest.includes("react")} onChange={(e) => handleChangeData(e, 'react')}/>
                React
            </label>
        </div>
        {errors.interest && <span className='error'>{errors.interest}</span>}

    </div>
  )
}

export default Interest