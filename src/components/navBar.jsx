import axios from "axios";
import { useEffect, useState } from "react"

export function NavBar({appname,greeting}){
    const [name, setName]=useState("");
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/getUser", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setName(response.data.FirstName);
        })
    },[]);
    
    

    return <div className="w-screen flex items-center justify-between border-2 p-3">
        <div className="text-lg font-serif text-black">{appname}</div>
        <div className="flex  justify-center items-center gap-3">
         <div className="text-lg">{greeting}</div>
         <div className="text-lg w-12 flex justify-center items-center h-12 bg-slate-400 p-3 rounded-full">{name.charAt(0).toUpperCase()}</div>
        </div>
        
    </div>
}