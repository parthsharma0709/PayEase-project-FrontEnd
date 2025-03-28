import { useState } from "react";
import { Button } from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { InputBox } from "../components/input-box";
export function PINElement() {
  const [enteredPIN, setEnteredPIN] = useState("");
   const navigate= useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get("amount");
  const id = searchParams.get("id");

  const Payment = async () => {
    try {
     
      const response = await axios.get("http://localhost:3000/api/v1/user/getPIN", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const correctPIN = String(response.data.PIN); 

      if (enteredPIN === correctPIN) {
      
        await axios.post(
          "http://localhost:3000/api/v1/user/moneyTransfer",
          {
            toId: id,
            amount: amount,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        alert("Transaction successful");
         navigate('/dashboard');
      } else {
        alert("Wrong PIN! Please enter a valid PIN.");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error);
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex justify-center items-center">
  <div className="flex flex-col w-[400px] gap-6 bg-white rounded-xl shadow-2xl p-6">
   
    <h2 className="text-2xl font-semibold text-center text-indigo-800">
      Verify & Pay
    </h2>
    
    <div className="w-full">
      <InputBox
        type="password"
        label="Enter PIN"
        onChange={(e) => setEnteredPIN(e.target.value)}
        maxLength={4}
        minLength={4}
        placeholder="Enter PIN"
      />
    </div>
    
    <div className="flex justify-center">
      <Button
        text="Verify & Pay"
        padding="px-6 py-3"
        bgColor="bg-indigo-700"
        textColor="text-white"
        hover="hover:bg-indigo-800"
        onClick={Payment}
      />
    </div>
  </div>
</div>

  );
}
