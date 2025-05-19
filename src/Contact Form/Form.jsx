import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErros = {};
        if(!form.name.trim()) newErros.name = "Name is required";
        if(!form.email.trim()){
            newErros.email = "Email is required";
        }
        else if(!/^\S+@\S+\.\S+$/.test(form.email)){
            newErros.email = "Invalid email format"
        }
        if(!form.message.trim()) newErros.message = "Message is required";
        return newErros;
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }
        else {
            setSubmitted(true);
            setErrors({})
            setForm({name: "", email: "", message: ""});
        }
    }


    return (
        <div style={{textAlign: "center"}}>
            {submitted ? (
                <h2>Thank you, {form.name || "User"}</h2>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom: "2rem"}}>
                        <label htmlFor='name'>Name: </label>
                        <input id='name' type="text" name='name' value={form.name} onChange={handleChange}/>

                        {errors.name && (<p style={{color: "red", margin: "0px"}}>{errors.name}</p>)}
                    </div>

                    <div style={{marginBottom: "2rem"}}>
                        <label htmlFor="email">Email: </label>
                        <input id='email' type="email" name='email' value={form.email} onChange={handleChange}/>

                        {errors.email && (<p style={{color: "red", margin: "0px"}}>{errors.email}</p>)}
                    </div>

                    <div style={{marginBottom: "2rem"}}>
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" id="message" value={form.message} onChange={handleChange}></textarea>

                        {errors.message && (<p style={{color: "red", margin: "0px"}}>{errors.message}</p>)}
                    </div>

                    <button type='submit' >Submit</button>
                </form>
            )}
        </div>
    )
}

export default Form