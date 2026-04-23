import { useRef, useState } from "react"


function FormsUp() {

    let [form, setForm] = useState({
        name: "",
        email: "",
        senha: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
    }

    
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    const input3Ref = useRef(null)

    function handKeyDown(e, nextRef) {
        if (e.key === "Enter") {
            e.preventDefault();
            nextRef?.current?.focus()
        }
    }
    


    return(
        <div className=" flex items-center justify-center min-h-screen bg-gray-800">
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 w-full max-w-md">
                    <div className=" space-y-1 w-full">
                        <label className=" text-white ">
                            Nome de usuario
                        </label>
                        <input ref={input1Ref} type="text" placeholder="Nome" name="name" className=" rounded-md border font-medium border-slate-500 w-full p-2" onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })} onKeyDown={(e) => handKeyDown(e, input2Ref)}/>
                    </div>

                    <div className=" space-y-1 w-full">
                        <label className=" text-white ">
                            Email Academico
                        </label>
                        <input ref={input2Ref} type="email" placeholder="Email" name="email" className=" rounded-md border font-medium border-slate-500 w-full p-2" onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })} onKeyDown={(e) => handKeyDown(e, input3Ref)}/>
                    </div>

                    <div className=" space-y-1 w-full">
                        <label className=" text-white ">
                            Senha para login
                        </label>
                        <input ref={input3Ref} type="password" placeholder="Senha" name="senha" className=" rounded-md border font-medium border-slate-500 w-full p-2" onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })} onKeyDown={(e) => handKeyDown(e, null)}/>
                    </div>

                    <button type="submit" className="border-transparent rounded-md bg-white font-semibold text-neutral-900 w-full max-w-[600px] p-2 "> Cadastrar </button>
            </form>

        </div>
    )
}

export default FormsUp