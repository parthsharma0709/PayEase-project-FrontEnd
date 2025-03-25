import { Button } from "../components/Button";
import {Link} from "react-router-dom"
import { InputBox } from "../components/input-box";
import { useState } from "react";
import axios from "axios"


export  function SignUp(){
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUserName]=useState("");
    return <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
        <div className=" flex flex-col w-[400px] h-[550px] bg-white rounded border-2">
            <div className="text-2xl font-bold flex justify-center items-center mt-2">SignUp</div>
            <div className="flex flex-col justify-center items-center mt-2 gap-3 p-3 ">
              <InputBox onChange={(e)=>{setUserName(e.target.value)}} type={"text"} placeholder= {"john123"} label={"Username"}/>
              <InputBox onChange={(e)=>{setPassword(e.target.value)}} type={"password"} placeholder={"John@123"} label={"Password"}/>
              <InputBox  onChange={(e)=>{setFirstName(e.target.value)}} type={"text"} placeholder={"John"} label={"FirstName"}/>
              <InputBox type={"text"} onChange={(e)=>{setLastName(e.target.value)}} placeholder={"Doe"} label={"LastName"}/>
              <div className="w-full mt-3 " >
                <Button width={"w-full"} padding={"p-3"} bgColor="bg-black" text="SignUp"  onClick={async ()=>{
                   try{
                    await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        password,
                        FirstName,
                        LastName
                    })
                    
                    alert("you have signed up successfully")
                   }
                   catch(error){
                    console.error("Error:", error.response ? error.response.data : error.message);
                    alert("Signup Failed");
                   }
                }} ></Button>
              </div>
             <hr/>
              <div> Already have an account? Please <Link to="/signin" className="text-blue-500 underline">
                Sign In
            </Link></div>
            </div>
        </div>
    </div>
}