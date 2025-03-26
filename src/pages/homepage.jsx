import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";


export function Homepage(){
    const navigate= useNavigate();
    return <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-400">
    <div className="text-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text mt-4 mb-5">Welcome to PayEase</div>
 <div className="w-[500px] h-[400px] bg-slate-700 rounded border-2 flex  gap-3 flex-col">
 <div className="text-center text-xl font-bold bg-gradient-to-r from-yellow-500 to-green-500 text-transparent bg-clip-text mt-4 mb-2">
  Safe & Secure Payment
</div>
  <p className="text-lg text-white-700 leading-relaxed max-w-md mx-auto mt-1">
  PayEase makes payments simple and secure. With advanced protection and an easy-to-use platform, we ensure every transaction is fast, safe, and hassle-free.
</p>
<div className="flex justify-center text-white font-bold items-center">Already a User ? Please</div>

<div className="flex justify-center items-center"><Button text={"SignIn"} hover={" hover:bg-green-500 hover:text-black "} width={"w-[100px]"} padding={"p-2"} bgColor="bg-black" onClick={()=>{ navigate('/signin')}}/></div>
 
<div className="flex justify-center text-white font-bold items-center">New Here ? Please SignUp to continue..</div>

<div className="flex justify-center   items-center "><Button text={"SignUp"} hover={" hover:bg-green-500 hover:text-black "} width={"w-[100px]"} padding={"p-2"} bgColor="bg-black" onClick={()=>{ navigate('/signup')}}/></div>

 </div>

    </div>
}