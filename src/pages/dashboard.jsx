import { Balance } from "../components/balance";
import axios from "axios";
import { NavBar } from "../components/navBar";
import { Users } from "../components/users";
import { useEffect, useState } from "react";

export function DashBoard() {
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

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-slate-200 to-gray-100">
      <NavBar appname={"PayEase"} greeting={"Hello"} />

      <div className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Hello <span className="text-blue-500">{name}</span>, Welcome to{" "}
          <span className="text-green-500">PayEase</span>
        </h1>
        <p className="mt-1 text-gray-600 text-lg">
          Making your transactions easy and secure.
        </p>
      </div>

     
      <div className="p-4 bg-white shadow-md rounded-lg mx-6 mb-4 sticky top-0 z-10">
        <Balance />
      </div>

    
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="w-full bg-white rounded-lg border shadow-md p-4 max-h-[500px] overflow-y-auto">
          <Users />
        </div>
      </div>
    </div>
  );
}
