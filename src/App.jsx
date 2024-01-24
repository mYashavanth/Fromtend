import { useState } from "react";

import styles from "./App.module.css";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <AllRoutes/>
    </>
  );
}

export default App;
