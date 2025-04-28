import React from 'react'

const Profile = ({data, setData, errors}) => {
    const {name, email, age} = data;

    const handleDataChnage = (e, field) => {
        setData((prevData) => ({
            ...prevData,
            [field]: e.target.value
        }))
    }

    return (
        <div>
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e) => handleDataChnage(e, "name")}/>
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
                <label>Age : </label>
                <input type="number" value={age} onChange={(e) => handleDataChnage(e, "age")}/>
                {errors.age && <span className='error'>{errors.age}</span>}
            </div>
            <div>
                <label>Email : </label>
                <input type="text" value={email} onChange={(e) => handleDataChnage(e, "email")}/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
        </div>
    )
}

export default Profile