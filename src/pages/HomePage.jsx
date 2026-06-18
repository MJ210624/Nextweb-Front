import { Users, MessageCircle, Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import getcommunities from "../services/CommunityServices";

function HomePage() {
  const navigate = useNavigate();
  {/* Mesmo esquema do Communities*/}
  const [communities, setCommunities] = useState([])

  useEffect(() => {
    async function loadCommunities() {
      try {
        const data = await getcommunities()
        setCommunities(data)
      } catch (e) {
        console.error(e)
      }
    }

    loadCommunities()
  }, [])

  return (
    <div className="min-h-screen bg-gray-800">
      <header>
        <NavBar />
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Bem-vindo ao NextWeb
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Uma plataforma para desenvolvedores se conectarem,
            participarem de comunidades, trocarem experiências
            e construírem projetos juntos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/communities")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
            >
              Explorar Comunidades
              <ArrowRight size={20} />
            </button>

          </div>

          {/* Comunidades do usuário */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Suas Comunidades
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {communities.map((community) => (
                <div
                  key={community.id}
                  className="bg-gray-700 rounded-2xl p-5 hover:bg-gray-600 transition cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {community.nameCommunity}
                  </h3>
                  <button
                    onClick={() =>
                      navigate(`/chats/${community.id}`)
                    }
                    className="mt-4 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
                  >
                    Entrar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          O que você pode fazer?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-3xl p-8">
            <Users className="text-blue-400 mb-4" size={40} />

            <h3 className="text-white text-2xl font-semibold">
              Comunidades
            </h3>

            <p className="text-gray-300 mt-3">
              Descubra grupos voltados para cursos,
              resenhas e áreas de interesse.
            </p>
          </div>

          <div className="bg-gray-700 rounded-3xl p-8">
            <MessageCircle
              className="text-green-400 mb-4"
              size={40}
            />

            <h3 className="text-white text-2xl font-semibold">
              Chats
            </h3>

            <p className="text-gray-300 mt-3">
              Converse em tempo real com membros das
              comunidades e participe de discussões.
            </p>
          </div>

          <div className="bg-gray-700 rounded-3xl p-8">
            <Rocket className="text-purple-400 mb-4" size={40} />

            <h3 className="text-white text-2xl font-semibold">
              Projetos
            </h3>

            <p className="text-gray-300 mt-3">
              Compartilhe ideias, receba feedback e
              desenvolva projetos colaborativos.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Como funciona?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-blue-600 mx-auto flex items-center justify-center text-white font-bold text-xl">
              1
            </div>

            <h3 className="text-white text-xl font-semibold mt-4">
              Entre em Comunidades
            </h3>

            <p className="text-gray-300 mt-2">
              Escolha a comunidade Da sua universidade.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-blue-600 mx-auto flex items-center justify-center text-white font-bold text-xl">
              2
            </div>

            <h3 className="text-white text-xl font-semibold mt-4">
              Participe dos Chats
            </h3>

            <p className="text-gray-300 mt-2">
              Tire dúvidas, ajude outros usuários e compartilhe conhecimento.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-blue-600 mx-auto flex items-center justify-center text-white font-bold text-xl">
              3
            </div>

            <h3 className="text-white text-xl font-semibold mt-4">
              Evolua Junto
            </h3>

            <p className="text-gray-300 mt-2">
              Crie conexões e desenvolva projetos colaborativos.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 text-center text-gray-400">
        © 2026 NextWeb - Conectando alunos através de comunidades.
      </footer>
    </div>
  );
}

export default HomePage;