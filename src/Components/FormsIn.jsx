import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FormsIn() {
  const navigate = useNavigate()
  
  const [mostrar, setMostrar] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">

      <div className="flex flex-col items-center w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          NextWeb
        </h1>


        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-6 w-full"
        >

          <div className="space-y-1 w-full">
            <label className="text-white">
              Email do usuário
            </label>

            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-md border border-slate-500 w-full p-2 bg-gray-700 text-white outline-none focus:border-blue-400"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="space-y-1 w-full">
            <label className="text-white">
              Senha
            </label>

            <div className="relative">
              <input
                required
                type={mostrar ? "text" : "password"}
                placeholder="Senha"
                className="rounded-md border border-slate-500 w-full p-2 pr-10 bg-gray-700 text-white outline-none focus:border-blue-400"
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />

              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setMostrar(!mostrar)}
              >
                {mostrar ? (
                  <Eye size={22} color="gray" />
                ) : (
                  <EyeOff size={22} color="gray" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-white font-semibold text-neutral-900 w-full p-2 hover:bg-slate-200 transition"
          >
            Entrar
          </button>

        </form>

        <p className="text-slate-300 mt-6 text-center">
          Não tem uma conta?{" "}
          <a
            className="text-blue-400 hover:text-blue-300"
            href="/signup"
          >
            Cadastre-se
          </a>
        </p>

      </div>

      <footer className="absolute bottom-2 text-slate-500 text-center text-sm">
        Feito com React e Tailwind
      </footer>

    </div>
  );
}

export default FormsIn;