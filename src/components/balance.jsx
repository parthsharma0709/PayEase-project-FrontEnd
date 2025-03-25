import axios from "axios";
import { useEffect, useState } from "react"

export function Balance(){
    const [balance,setBalance]= useState(1000);
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/getBalance", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setBalance(response.data.balance);
        })
    },[]);

    
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

    return (
        <div className="pl-4 text-lg font-semibold">
          Hey {name} your balanace is  {balance} rupees.
        </div>
    )
}