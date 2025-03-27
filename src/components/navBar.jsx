import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function NavBar({ appname, greeting }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

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

  return (
    <div className="w-screen flex items-center justify-between bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg px-6 py-4">
   
      <div className="text-2xl font-bold text-white">
        {appname}
      </div>

     
      <div className="flex items-center gap-4">
        <div className="text-white text-lg">
          {greeting},{" "}
          <span className="font-semibold">
            {name}
          </span>
        </div>
       
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 font-bold text-lg">
          {name.charAt(0).toUpperCase()}
        </div>
       
        <Button
        //   bgColor="bg-red-500 hover:bg-red-600"
          text="Log Out"
          padding="px-4 py-2"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        />
      </div>
    </div>
  );
}
