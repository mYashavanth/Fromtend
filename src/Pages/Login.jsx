import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fetchData = async (input) => {
    const data = await axios.post(
      "http://localhost:8008/users/login",
      input,
      {
        withCredentials: true,
      }
    );
    console.log(data.data);
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
