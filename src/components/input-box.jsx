
export function InputBox({label,placeholder, type, onChange}){
    return (
        <div className="flex flex-col  w-full">
                <div className="text-lg  ">{label}</div>
                <input type={type} placeholder={placeholder} onChange={onChange} className="w-full p-2 border-2" />
              </div>
    )
}