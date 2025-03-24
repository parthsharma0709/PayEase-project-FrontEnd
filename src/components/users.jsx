

export function Users({users}){
 return <div className="flex flex-col">
    <div className="relative w-full m-2">
 <input
   className="w-full p-3 pr-12  border-gray-300 rounded-md border-2"
   type="text"
   placeholder="Search a user"
 />
 <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md">
   Search
 </button>

</div>
 {users}
 </div>

}