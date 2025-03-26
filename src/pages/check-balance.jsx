 import axios from "axios";
import { Button } from "../components/Button";
 import { useState ,useEffect } from "react";
export function MyBalance(){
     const [enteredPIN, setEnteredPIN] = useState("");
     const [balance, setBalance]=useState()
    
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

     const Check= async ()=>{
        try {
            // Fetch PIN from the server
            const response = await axios.get("http://localhost:3000/api/v1/user/getPIN", {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            });

            const correctPIN= String(response.data.PIN);

            if(enteredPIN===correctPIN){
             const result =  await axios.get("http://localhost:3000/api/v1/user/getBalance" ,{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                });
               setBalance(result.data.balance)
                alert("verification successfull")
            }
            else{
                alert("verification failed , please enter a correct PIN")
            }
     }
     catch(error){
        console.error("Error: " , error.response?.data || error)
     }
    }


    return (
       <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
             <div className="flex flex-col w-[400px] gap-3 h-[300px] bg-white rounded border-2 p-3">
               <div>Enter PIN</div>
               <div className="w-full">
                 <input
                   onChange={(e)=>{setEnteredPIN(e.target.value)}}
                   className="w-full p-2"
                   type="password"
                   maxLength="4"
                   minLength="4"
                   placeholder="PIN"
                   required
                 />
               </div>
            {balance && <div className="pl-3 mb-2 mt-2">  Hey {name} your account balanace is : {balance} rupees</div>}
               <Button text={"Verify & Check"} hover={" hover:bg-blue-500 hover:text-black "} padding={"p-2"} bgColor="bg-black" onClick={Check}  />
             </div>
           </div>
      );
}