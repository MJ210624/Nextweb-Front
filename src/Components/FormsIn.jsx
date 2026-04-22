import { useState } from "react"
import { Eye } from 'lucide-react'
import { EyeOff } from 'lucide-react'

function FormsIn() {
    let [mostrar, setMostrar] = useState();

    
    return(
        <div className="space-y-4 flex flex-col justify-end pb-96 items-center h-screen bg-gray-700">
            <h1 className="text-2xl font-bold text-slate-300 p-10">Conecte-se com as pessoas mais próximas</h1>
            <div className=" w-[90%]">
                <input type="email" placeholder="Email" className=" rounded-md border font-medium border-slate-500 w-full max-w-[600px] p-2 " />
            </div>
            <div className=" relative w-[90%]">
                <input type={mostrar ? "text" : "password"} placeholder="Senha" className=" rounded-md border border-slate-500 w-full max-w-[600px] p-2 pr-10" />
                <button type="button" className=" absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setMostrar(!mostrar)} > {mostrar ? <Eye size={25} color="gray"/> : <EyeOff size={25} color="gray"/>} </button>
            </div>
            <button className=" border-transparent rounded-md bg-white font-semibold text-neutral-900 w-[90%] max-w-[600px] p-2">Entrar</button> 
            
            {/*depois mudar o href para link*/}
            <p> 
               Não tem uma conta? <a className="text-blue-400" href="VibeCoding.com">Cadastre-se</a>
            </p>

        </div>
    )
}

export default FormsIn