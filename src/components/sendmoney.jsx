/* eslint-disable react/prop-types */
import { useState } from "react";
import { InputBox } from "../components/input-box";
import { Button } from "./Button";

export function SendMoney({ReceiverName=""}){
    const user = ReceiverName?.trim().charAt(0).toUpperCase() || "?";
    // eslint-disable-next-line no-unused-vars
    const [amount, setAmount]=useState("")
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-600">
        <div className=" bg-white flex w-[450px] p-6 h-[350px] rounded gap-4 flex-col">
         <div className="flex justify-center text-2xl font-bold items-center">Send Money</div>
         <div className="flex justify-start items-center gap-4">
         <div className="text-lg w-12 flex justify-center items-center h-12 bg-slate-400 p-3 rounded-full">{user}</div>
         <div className="text-lg font-semibold">{ReceiverName}</div>
         </div>
         <div>
            <InputBox onChange={(e)=>setAmount(e.target.value)} type={"text"} placeholder= {"1000"} label={"Enter Amount in Rupees"}/>
         </div>
         <Button bgColor="bg-purple-600" padding={"p-2"} text={"Send"}/>
        </div>

        </div>
    )
}