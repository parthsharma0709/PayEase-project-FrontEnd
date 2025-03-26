import { useState } from "react";
import { InputBox } from "../components/input-box";
import { Button } from "./Button";
import { useLocation, useNavigate } from "react-router-dom";


export function SendMoney() {
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const navigate= useNavigate();
  

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-600">
      <div className="bg-white flex w-[450px] p-6 h-[350px] rounded gap-4 flex-col">
        <div className="flex justify-center text-2xl font-bold items-center">Send Money</div>
        <div className="flex justify-start items-center gap-4">
          <div className="text-lg w-12 flex justify-center items-center h-12 bg-slate-400 p-3 rounded-full">
            {name?.[0].toUpperCase() || "?"}
          </div>
          <div className="text-lg font-semibold">{name || "Unknown"}</div>
        </div>
        <div>
          <InputBox onChange={(e) => setAmount(Number(e.target.value))} type="number" placeholder="1000" label="Enter Amount in Rupees" />
        </div>


        <Button
  bgColor="bg-purple-600"
  padding="p-2"
  text="Pay"
  onClick={()=>{
    navigate(`/enterPIN?id=${id}&amount=${amount}`);

  }}
/>

      </div>
    </div>
  );
}
