import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContex";

export default function Logout() {
  const { auth, setAuth } = useContext(AuthContext);
  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:8008/users/logout",{withCredentials:true});
      console.log(data);
      setAuth(false);
      
    } catch (error) {
      console.log({ err: error.message });
    }

  };

  const handleClick = () => {
    fetchData();
  };

  console.log(auth);
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
