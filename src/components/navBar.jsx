/* eslint-disable react/prop-types */
export function NavBar({appname,greeting,user}){
    return <div className="w-screen flex items-center justify-between border-2 p-3">
        <div className="text-lg font-serif text-black">{appname}</div>
        <div className="flex  justify-center items-center gap-3">
         <div className="text-lg">{greeting}</div>
         <div className="text-lg w-12 flex justify-center items-center h-12 bg-slate-400 p-3 rounded-full">{user}</div>
        </div>
        
    </div>
}