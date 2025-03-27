
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Balance(){
    const navigate= useNavigate();
    return (
        <div className="pl-4 text-lg font-semibold">
          <div className="flex justify-between items-center p-3 pr-8">
          <Button text={"Check Balance"} bgColor="bg-black" padding={"p-2"} onClick={()=>{
                navigate('/checkBalance')
          }}/>
          <Button text={"Update Details"} padding={"p-2"} bgColor="bg-black" onClick={()=>{navigate('/updateUser')}}/>
          <Button text={"Reset PIN"} padding={"p-2"} bgColor="bg-black" onClick={()=>{navigate('/resetPIN')}}/>
          </div>
        </div>

    )
}