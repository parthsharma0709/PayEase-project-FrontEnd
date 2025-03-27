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
      // Fetch PIN from the server
      const response = await axios.get("http://localhost:3000/api/v1/user/getPIN", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const correctPIN = String(response.data.PIN); // Convert to string for comparison

      if (enteredPIN === correctPIN) {
        // If PIN matches, proceed with the transaction
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
    <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
      <div className="flex flex-col w-[400px] gap-3 h-[200px] bg-white rounded border-2 p-3">
       
        <div className="w-full">
         
          <InputBox type={"password"} label={"Enter PIN"} onChange={(e)=>{setEnteredPIN(e.target.value)}} maxLength={4} minLength={4} placeholder={"Enter PIN"}  />
        </div>
        <Button text={"Verify & Pay"} padding={"p-2"} onClick={Payment} />
      </div>
    </div>
  );
}
