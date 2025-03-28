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

      alert("Your PIN has been updated successfully");
    } catch (error) {
      console.error("Error updating PIN:", error);
      setMessage("An error occurred while resetting your PIN. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex justify-center items-center">
      <div className="flex flex-col w-[400px] gap-6 bg-white rounded-xl shadow-lg p-6">
       
        <h2 className="text-2xl font-semibold text-center text-indigo-700">Reset Your PIN</h2>
       
        <div className="w-full flex flex-col gap-4">
          <InputBox
            type="password"
            label="Enter Previous PIN"
            maxLength={4}
            minLength={4}
            placeholder="Previous PIN"
            onChange={(e) => setPreviousPIN(e.target.value)}
          />
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
         
          {message && (
            <p className="text-center text-red-500 font-medium">{message}</p>
          )}
        </div>
      
        <div className="flex justify-center">
          <Button
            text="Reset PIN"
            padding="px-6 py-3"
            bgColor="bg-indigo-700 hover:bg-indigo-800"
            textColor="text-white"
            onClick={resetPIN}
          />
        </div>
      </div>
    </div>
  );
}
