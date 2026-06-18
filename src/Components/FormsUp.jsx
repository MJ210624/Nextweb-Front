import { useRef, useState } from "react";
import { createUser } from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function FormsUp() {
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    senha: "",
  });

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await createUser(form);

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

        function handKeyDown(e, nextRef) {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="text-4xl font-bold text-white text-center">NextWeb</h1>

        <p className="text-slate-400 text-center mt-3 mb-8">
          Conecte-se com pessoas do seu ambiente acadêmico
        </p>

        <form
          className="flex flex-col items-center space-y-6 w-full"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 w-full">
            <label className="text-white">Nome de usuário</label>

            <input
              required
              ref={input1Ref}
              type="text"
              placeholder="Nome"
              name="name"
              className="rounded-md border font-medium border-slate-500 w-full p-2 bg-gray-700 text-white outline-none focus:border-blue-400"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              onKeyDown={(e) => handKeyDown(e, input2Ref)}
            />
          </div>

          <div className="space-y-1 w-full">
            <label className="text-white">Email Acadêmico</label>

            <input
              required
              ref={input2Ref}
              type="email"
              placeholder="Email"
              name="email"
              className="rounded-md border font-medium border-slate-500 w-full p-2 bg-gray-700 text-white outline-none focus:border-blue-400"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              onKeyDown={(e) => handKeyDown(e, input3Ref)}
            />
          </div>

          <div className="space-y-1 w-full">
            <label className="text-white">Senha para login</label>

            <div className=" relative">
              <input
                required
                ref={input3Ref}
                type={mostrar ? "text" : "password"}
                placeholder="Senha"
                name="senha"
                className="rounded-md border font-medium border-slate-500 w-full p-2 bg-gray-700 text-white outline-none focus:border-blue-400"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
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
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormsUp;
