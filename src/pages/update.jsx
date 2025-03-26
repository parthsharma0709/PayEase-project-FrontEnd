import { Button } from "../components/Button";
import {Link, useNavigate} from "react-router-dom"
import { InputBox } from "../components/input-box";
import { useState } from "react";
import axios from "axios"

export function UpdateDetails(){
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUserName]=useState("");
    const navigate=useNavigate();
    return <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
        <div className=" flex flex-col w-[400px] h-[550px] bg-white rounded border-2">
            <div className="text-2xl font-bold flex justify-center items-center mt-2">Update User Details</div>
            <div className="flex flex-col justify-center items-center mt-2 gap-3 p-3 ">
              <InputBox onChange={(e)=>{setUserName(e.target.value)}} type={"text"} placeholder= {"john123"} label={"Username"}/>
              <InputBox onChange={(e)=>{setPassword(e.target.value)}} type={"password"} placeholder={"John@123"} label={"Password"}/>
              <InputBox  onChange={(e)=>{setFirstName(e.target.value)}} type={"text"} placeholder={"John"} label={"FirstName"}/>
              <InputBox type={"text"} onChange={(e)=>{setLastName(e.target.value)}} placeholder={"Doe"} label={"LastName"}/>
              <div className="w-full mt-3 " >
                <Button width={"w-full"} padding={"p-3"} bgColor="bg-black" text="Update Details"  onClick={async ()=>{
                   try{
                    await axios.put("http://localhost:3000/api/v1/user/updateUser",{
                        username,
                        password,
                        FirstName,
                        LastName
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    })
                    
                    alert("your details has been updated  successfully")
                    navigate('/signin');
                   }
                   catch(error){
                    console.error("Error:", error.response ? error.response.data : error.message);
                    alert("Updation  Failed");
                   }
                }} ></Button>
              </div>
             <hr/>
              
            </div>
        </div>
    </div>
}