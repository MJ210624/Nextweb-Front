import FormsUp from "../Components/FormsUp";

function SignUp() {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-[minmax(0px,1fr)_minmax(370px,1fr)_minmax(0px,1fr)]">
      
      <div className="hidden sm:flex flex-col justify-center bg-gray-900 px-10 space-y-10">
        <h1 className="text-4xl font-bold text-white leading-tight">
          Crie sua conta no NextWeb
        </h1>

        <p className="text-slate-400 text-lg">
          Faça parte de uma comunidade acadêmica onde você pode se conectar,
          aprender e compartilhar conhecimento com pessoas próximas de você.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h2 className="text-white font-semibold">Criação rápida</h2>
            <p className="text-slate-400 text-sm">
              Leva menos de 1 minuto para criar sua conta.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h2 className="text-white font-semibold">Conexões reais</h2>
            <p className="text-slate-400 text-sm">
              Encontre pessoas do seu ambiente acadêmico.
            </p>
          </div>
        </div>
      </div>

      
      <div className="">
        <FormsUp />
      </div>

     
      <div className="hidden sm:flex flex-col justify-center bg-gray-900 px-10 space-y-10">
        <h1 className="text-4xl font-bold text-white leading-tight">
          Comece sua jornada agora
        </h1>

        <p className="text-slate-400 text-lg">
          Crie seu perfil, explore novas oportunidades e conecte-se com pessoas
          que compartilham dos mesmos interesses acadêmicos.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h2 className="text-white font-semibold">Comunidade ativa</h2>
            <p className="text-slate-400 text-sm">
              Interaja com estudantes diariamente.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h2 className="text-white font-semibold">Ambiente simples</h2>
            <p className="text-slate-400 text-sm">
              Interface rápida, simples e responsiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
