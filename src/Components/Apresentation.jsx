function Apresentation() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-8">

      <div className="max-w-xl space-y-8">

        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Bem-vindo ao NextWeb
            
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">
            Conecte-se com pessoas do seu ambiente acadêmico e 
            compartilhe experiências.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <h2 className="text-white font-semibold text-lg mb-2">
              Ambiente Acadêmico
            </h2>

            <p className="text-slate-400">
              Conheça estudantes com interesses parecidos e
              expanda sua rede de contatos.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <h2 className="text-white font-semibold text-lg mb-2">
              Compartilhe Conhecimento
            </h2>

            <p className="text-slate-400">
              Troque ideias, publique conteúdos e participe
              de discussões da comunidade.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <h2 className="text-white font-semibold text-lg mb-2">
              Ambiente Simples
            </h2>

            <p className="text-slate-400">
              Interface simples, rápida e desenvolvida para
              facilitar sua experiência.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Apresentation;