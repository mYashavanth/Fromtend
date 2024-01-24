import React, { useState } from "react";
import axios from "axios"

export default function Register() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });

    const fetchData = async (input) => {
        const data = await axios.post(
          "http://localhost:8008/users/register",
          input,{
            withCredentials: true
          }
        );
        console.log(data);
    }


    const handelSubmit = (e) => {
        e.preventDefault()
        fetchData(formData)
        
    }

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData);
    }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handelSubmit}>
        <label>Name : </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <label>Email : </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label>Password : </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
