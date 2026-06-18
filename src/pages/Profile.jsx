import { User, Users, FolderGit2, Rocket } from "lucide-react";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../services/UserServices";
import getcommunities from "../services/CommunityServices";

export default function Profile() {
    // Aqui precisaria mudar apenas para a função que traga as comunidades de um usuario
    // Criar ela no CommunityServices
    // E usar a rota certa no UserService para puxar dados do usuario

    const user = 
        {
            id: 1,
            name: "usuario343",
            email: "usuario@gmail.com"
        }

    const [communities, setCommunities] = useState([])

    useEffect(() => {
        async function loadData() {
            try {
                const communitiesData = await getcommunities();
                console.log(communities)
                setCommunities(communitiesData);

            } catch (e) {
                console.error(e);
            }
        }

        loadData();
    }, []);


    const projects = [
        {
            id: 1,
            name: "Progamação Web",

        },
        {
            id: 2,
            name: "Programação de Dispositivos Móveis",
        },
    ];


    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Espaço da Navbar */}
            <header>
                <NavBar />
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">
                {/* Perfil */}
                <section className="bg-gray-700 rounded-3xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                        <div className="w-32 h-32 rounded-full bg-gray-500 flex items-center justify-center">
                            <User size={64} className="text-white" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl font-bold">{user.name}</h1>


                            <p className="text-gray-400 mt-2">
                                {user.email}
                            </p>


                        </div>
                    </div>
                </section>

                {/* Comunidades */}
                <section className="mt-10">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="text-blue-400" size={40} />
                        <h2 className="text-3xl font-bold">
                            Minhas Comunidades
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {communities.map((community) => (
                            <div
                                key={community.id}
                                className="bg-gray-700 rounded-3xl p-6 hover:scale-[1.02] transition"
                            >
                                <h3 className="text-xl font-bold">
                                    {community.name}
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
                </section>

                {/* Projetos */}
                <section className="mt-10">
                    <div className="flex items-center gap-3 mb-6">
                        <Rocket className="text-purple-400" size={40} />
                        <h2 className="text-3xl font-bold">
                            Meus Projetos
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-700 rounded-3xl p-6 hover:scale-[1.02] transition"
                            >
                                <h3 className="text-xl font-bold">
                                    {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}