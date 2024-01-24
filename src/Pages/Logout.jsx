import React from "react";
import axios from "axios";

export default function Logout() {
  const fetchData = async () => {
    const data = await axios.get("http://localhost:8008/users/logout",{withCredentials:true});
    console.log(data);
  };

  const handleClick = () => {
    fetchData();
  };
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
