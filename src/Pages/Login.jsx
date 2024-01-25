import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContex";

export default function Login() {
  const { auth, setAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fetchData = async (input) => {
    try {
      const data = await axios.post(
        "http://localhost:8008/users/login",
        input,
        {
          withCredentials: true,
        }
      );
      console.log(data.data);
      setAuth(true);
      
    } catch (error) {
      console.log({ err: error.message }); 
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetchData(formData);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(auth);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handelSubmit}>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
