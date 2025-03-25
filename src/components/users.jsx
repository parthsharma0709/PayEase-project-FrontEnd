import { useEffect, useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./input-box";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);  
  const [filter, setFilter] = useState("");
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulkUsers?filter=" + filter ,{
        headers: {
                Authorization: localStorage.getItem("token")
            }
      })
      .then((response) => {
       
          setUsers(response.data.user); 
        
      })
      
  }, [filter]);

  return (
    <div className="flex flex-col">
      <div className="relative w-full m-2">
        <InputBox
          onChange={(e) => setFilter(e.target.value)}
          type={"text"}
          placeholder={"David"}
          label={"Search a user..."}
        />
      </div>

      <div className="pl-5 text-lg">
        {/* Ensure users is an array before mapping */}
        {Array.isArray(users) && users.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  const navigate=useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex  justify-center items-center gap-3">
      <div className="text-lg w-8 flex justify-center items-center h-8 bg-slate-400 p-3 rounded-full">{user.FirstName[0] }</div>
         <div className="text-lg">{user.FirstName}  {user.LastName}</div>
         
        </div>
      <Button text={"Send Money"} padding={"p-1"} onClick={()=>{
               navigate("/sendMoney?id="+ user._id + "&name="+ user.FirstName)
      }} />
    </div>
  );
}
