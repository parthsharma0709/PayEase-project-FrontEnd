import { Balance } from "../components/balance"

import { NavBar } from "../components/navBar"
import {Users} from "../components/users"
export function DashBoard(){
    return (
        <div className="flex flex-col gap-4">
       <NavBar appname={"PayTm App"} greeting={"Hello"} user={"U"}/>
       <Balance amount={"1000"}/>
       <div className="mr-4">
        <Users />
       </div>
        </div>
    )
}