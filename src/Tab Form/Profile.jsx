import React from 'react'

const Profile = ({data, setData, errors}) => {

    const {name, age, email} = data;

    const handleDataChange = (e, input) => {
        setData((prev) => ({
            ...prev,
            [input]: e.target.value
        }))
    }
    
    

  return (
    <div>
        <div>
            <label >Name : </label>
            <input type="text" value={name} onChange={(e) => handleDataChange(e, "name")}/>
            {errors.name && <span className='error'>{errors.name}</span>}
        </div>
        <div>
            <label >Age : </label>
            <input type="number" value={age} onChange={(e) => handleDataChange(e, "age")}/>
            {errors.age && <span className='error'>{errors.age}</span>}

        </div>
        <div>
            <label >Email : </label>
            <input type="text" value={email} onChange={(e) => handleDataChange(e, "email")}/>
            {errors.email && <span className='error'>{errors.email}</span>}

        </div>
    </div>
  )
}


export default Profile

