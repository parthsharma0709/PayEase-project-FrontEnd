import { useState } from "react";
import { InputBox } from "../components/input-box";
import { Button } from "../components/Button";
import axios from "axios";

export function RESETPIN() {
  const [previousPIN, setPreviousPIN] = useState("");
  const [updatedPIN, setUpdatedPIN] = useState("");
  const [confirmUpdatedPIN, setConfirmUpdatedPIN] = useState("");
  const [message, setMessage] = useState("");

  const resetPIN = async () => {
    if (updatedPIN !== confirmUpdatedPIN) {
      setMessage("New PINs do not match. Please try again.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/api/v1/user/getPIN", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const correctPIN = String(response.data.PIN);
      
      if (correctPIN !== previousPIN) {
        setMessage("Previous PIN is incorrect.");
        return;
      }


      await axios.put(
        "http://localhost:3000/api/v1/user/resetPIN",
        { PIN: String(updatedPIN) },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("your PIN has been updated successfully")
    } catch (error) {
      console.error("Error updating PIN:", error);
      setMessage("An error occurred while resetting your PIN. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
      <div className="flex flex-col w-[400px] gap-3 h-[365px] bg-white rounded border-2 p-3">
        <div className="w-full gap-3 flex flex-col">
          <InputBox
            type="password"
            label="Enter Previous PIN"
            maxLength={4}
            minLength={4}
            placeholder="Previous PIN"
            onChange={(e) => setPreviousPIN(e.target.value)}
          />
          {message && <p className="text-center text-red-500">{message}</p>}
          <InputBox
            type="password"
            label="Enter New PIN"
            maxLength={4}
            minLength={4}
            placeholder="New PIN"
            onChange={(e) => setUpdatedPIN(e.target.value)}
          />
          <InputBox
            type="password"
            label="Enter New PIN Again"
            maxLength={4}
            minLength={4}
            placeholder="Confirm New PIN"
            onChange={(e) => setConfirmUpdatedPIN(e.target.value)}
          />
          
        </div>
        <div className="flex justify-center items-center mt-3"><Button text="Reset PIN"  padding="p-2" bgColor="bg-black" onClick={resetPIN} /></div>
        
      </div>
    </div>
  );
}
