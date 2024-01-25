import React, { useContext, useEffect } from "react";
import GetNotes from "../Components/GetNotes";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContex";

export default function NotesData() {
    const { auth } = useContext(AuthContext);
    const navigateTo = useNavigate();
    useEffect(() => {
        if(!auth){
            navigateTo("/login");
        }
    },[])
    
    return (
        <div>
            <h1>NotesData</h1>
            <GetNotes />
        </div>
    );
}