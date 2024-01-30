import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetNotes() {
    const [notes, setNotes] = useState([]);

    const fetchData = async () => {
        try {
            const data = await axios.get(
              "https://backend-production-def2.up.railway.app/notes",
              { withCredentials: true }
            );
            console.log(data.data);
            setNotes(data.data);
            
        } catch (error) {
            console.log({err:error.message});
        }
    }
    // const handleClick = () => {
    //     fetchData();
    // }
    useEffect(() => {
        fetchData();
    },[])
   
    
    return (
        <div>
            <h1>Notes</h1>
            {/* <button onClick={handleClick}>Show Notes</button> */}
            {
                notes.map((note, index) => {
                    return (
                      <div key={index}>
                        <h1>{note.title}</h1>
                        <p>{note.description}</p>
                        <p>{note.tag}</p>
                      </div>
                    );
                })
            }
        </div>
    );
}