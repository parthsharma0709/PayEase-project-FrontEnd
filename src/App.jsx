
import {BrowserRouter,Route, Routes} from "react-router-dom"
import {SignUp} from "./pages/signup"
import {SignIn} from "./pages/signin"

import { DashBoard } from "./pages/dashboard"

import { Transaction } from "./pages/moneytransfer"

function App() {

  return (
    <>
      <BrowserRouter>
<Routes>
           <Route path="/signup" element={<SignUp/>}/>
           <Route path="/signin" element={<SignIn/>}/>
           <Route path="/dashboard" element={<DashBoard/>}/>
           <Route path="/sendMoney" element={<Transaction/>}/>
</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
