import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/input-box";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";

export  function SignIn(){
  const [username, setUserName]=useState("");
  const [password, setPassword]=useState("");
  const [PIN , setPIN]= useState("")
  const navigate=useNavigate();
    return <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
        <div className=" flex flex-col w-[400px] h-[450px] bg-white rounded border-2">
            <div className="text-2xl font-bold flex justify-center items-center mt-2">SignIn</div>
            <div className="flex flex-col justify-center items-center mt-2 gap-3 p-3 ">
              <InputBox onChange={(e)=>setUserName(e.target.value)} type={"text"} placeholder= {"john123"} label={"Username"}/>
             <InputBox onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder= {"john@123"} label={"Password"}/>
             <InputBox onChange={(e)=>setPIN(e.target.value)} type={"password"} placeholder= {"1234"} label={"PIN"}/>
              <div className="w-full mt-3 " >
                <Button bgColor="bg-black" width={"w-full"} padding={"p-3"}  text="SignIn" onClick={async()=>{
               try{
                const response=  await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password,
                    PIN
                  });
                  localStorage.setItem("token",response.data.token);
                  alert("you have signed up successfully");
                  navigate('/dashboard');
               }
               catch(error){
                console.error("Error " , error.response? error.response.data : error.message);
                alert("signin failed")
               }

                }} ></Button>
              </div>
              <div> Don&apos;t have an account? Please <Link to="/signup" className="text-blue-500 underline">
                Sign Up
            </Link></div>
              
            </div>
        </div>
    </div>
}