import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { DashBoard } from "./pages/dashboard";

import { Transaction } from "./pages/moneytransfer";
import { PINElement } from "./pages/pin";
import { Homepage } from "./pages/homepage";
import { MyBalance } from "./pages/check-balance";
import { UpdateDetails } from "./pages/update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/sendMoney" element={<Transaction />} />
        <Route path="/enterPIN" element={<PINElement/>}/>
        <Route path="/checkBalance" element={<MyBalance/>}/>
        <Route path="/updateUser" element={<UpdateDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
