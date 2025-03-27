import axios from "axios";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { InputBox } from "../components/input-box";

export function MyBalance() {
  const [enteredPIN, setEnteredPIN] = useState("");
  const [balance, setBalance] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/getUser", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setName(response.data.FirstName);
      });
  }, []);

  const Check = async () => {
    try {
      
      const response = await axios.get("http://localhost:3000/api/v1/user/getPIN", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const correctPIN = String(response.data.PIN);

      if (enteredPIN === correctPIN) {
        const result = await axios.get("http://localhost:3000/api/v1/user/getBalance", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setBalance(result.data.balance);
        alert("Verification successful");
      } else {
        alert("Verification failed. Please enter the correct PIN.");
      }
    } catch (error) {
      console.error("Error: ", error.response?.data || error);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-400 to-purple-600 flex justify-center items-center">
      <div className="flex flex-col w-[400px] gap-6 bg-white rounded-xl shadow-lg p-6">
       
        <h2 className="text-2xl font-semibold text-center text-indigo-700">
          Check Your Balance
        </h2>
     
        <div className="w-full">
          <InputBox
            type={"password"}
            label={"Enter PIN"}
            onChange={(e) => setEnteredPIN(e.target.value)}
            maxLength={4}
            minLength={4}
            placeholder={"Enter PIN"}
          />
        </div>
       
        {balance !== null && (
          <div className="text-lg font-medium text-green-600 text-center">
            Hey {name}, your account balance is: <br />
            <span className="text-xl font-bold">{balance} rupees</span>
          </div>
        )}
    
        <Button
          text={"Verify & Check"}
          hover={"hover:bg-indigo-600 hover:text-white"}
          padding={"px-6 py-3"}
          bgColor="bg-indigo-700"
          textColor="text-white"
          onClick={Check}
        />
      </div>
    </div>
  );
}
