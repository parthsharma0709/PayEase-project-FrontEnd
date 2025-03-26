import axios from "axios";
import { useEffect, useState } from "react"
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function NavBar({appname,greeting}){
    const [name, setName]=useState("");
    const navigate=useNavigate();
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
        <div className=" text-xl font-bold font-serif bg-gradient-to-r from-blue-500 via-blue-300 to-yellow-500 text-transparent bg-clip-text

">{appname}</div>
        <div className="flex  justify-center items-center gap-3">
         <div className="text-lg">{greeting}</div>
         <div className="text-lg w-12 flex justify-center items-center h-12 bg-slate-400 p-3 rounded-full">{name.charAt(0).toUpperCase()}</div>
         <Button bgColor="bg-slate-800" text={"LogOut"} padding={"p-2"} onClick={()=>{localStorage.removeItem("token") 
         navigate('/signin') }}/>
         {/* <Button text={"Update Details"} padding={"p-2"} onClick={async()=>{
             await axios.put("")
         }}/> */}
        </div>
        
        

    </div>
}