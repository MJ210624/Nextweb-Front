import { useState } from "react"
import { Eye } from 'lucide-react'
import { EyeOff } from 'lucide-react'

function FormsIn() {
    let [mostrar, setMostrar] = useState();
    let [email, setEmail] = useState();
    let [senha, setSenha] = useState();

    const handleSubmit = () => {
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)
    }
    
    return(
        <div className="flex flex-col  items-center h-screen bg-gray-800">
            <h1 className="  absolute text-xl font-bold  text-slate-300 p-10">(logo) NextWeb</h1>
            <div className=" space-y-4 h-screen flex flex-col justify-center items-center w-[90%]">
                <h1 className="  text-2xl font-bold  text-slate-300 p-10">Conecte-se com as pessoas mais próximas do seu ambiemte</h1>
                <div className=" w-[90%]">
                    <input type="email" placeholder="Email" className=" rounded-md border font-medium border-slate-500 w-full max-w-[600px] p-2 " onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className=" relative w-[90%]">
                    <input type={mostrar ? "text" : "password"} placeholder="Senha" className=" rounded-md border border-slate-500 w-full max-w-[600px] p-2 pr-10" onChange={(e) => {
                        setSenha(e.target.value)
                    }}/>
                    <button type="button" className=" absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setMostrar(!mostrar)} > {mostrar ? <Eye size={25} color="gray"/> : <EyeOff size={25} color="gray"/>} </button>
                </div>
                <button className=" border-transparent rounded-md bg-white font-semibold text-neutral-900 w-[90%] max-w-[600px] p-2" onClick={handleSubmit}>Entrar</button> 
            
                {/*depois mudar o href para link*/}
                <p> 
                    Não tem uma conta? <a className="text-blue-400" href="VibeCoding.com">Cadastre-se</a>
                </p>
            </div>
            <footer className="w-full text-slate-500 text-center pb-1">
                Feito com React e Tailwind
            </footer>
        </div>
    )
}

export default FormsIn