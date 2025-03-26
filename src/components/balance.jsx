import axios from "axios";
import { useEffect, useState } from "react"
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Balance(){
    // const [balance,setBalance]= useState(1000);
    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/v1/user/getBalance", {
    //         headers: {
    //             Authorization: localStorage.getItem("token")
    //         }
    //     })
    //     .then((response) => {
    //         setBalance(response.data.balance);
    //     })
    // },[]);

    const navigate= useNavigate();

    
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
          <div className="text-center text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text  p-2 transition-all duration-300 hover:bg-green-500 hover:text-black rounded-lg cursor-pointer">
  Hello {name} Welcome to PayEase
</div>

          <div className="flex justify-between items-center p-3 pr-8">
          <Button text={"Check Balance"} bgColor="bg-black" padding={"p-2"} onClick={()=>{
                navigate('/checkBalance')
          }}/>
          <Button text={"Update Details"} padding={"p-2"} onClick={()=>{navigate('/updateUser')}}/>
          </div>
        </div>

    )
}