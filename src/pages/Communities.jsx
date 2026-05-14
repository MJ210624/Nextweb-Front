import React from 'react'
import NavBar from '../Components/NavBar'
import { Search, Users } from "lucide-react";

const communities = [
  {
    id: 1,
    name: "IFCE Comunidade",
    description: "Comunidade do IFCE",
    members: 1200,
    image:
      "href=#",
  },
  {
    id: 2,
    name: "UFC Comunidade",
    description: "Comunidade da UFC",
    members: 1209,
    image:
        "href=#",
  },
  {
    id: 3,
    name: "UECE Comunidade",
    description: "Comunidade da UECE",
    members: 1100,
    image:
        "href=#",
  },
  {
    id: 4,
    name: "UNIFOR Comunidade",
    description: "Comunidade da UNIFOR",
    members: 1300,
    image:
        "href=#",
  }
];

function Communities() {
  return (
    

    <div className="lex items-center justify-center min-h-screen bg-gray-800">
        <header>
            <NavBar />
        </header>

      <div className="px-8 mt-6">
        <div className="flex items-center bg-gray-700 rounded-2xl px-4 py-3 shadow-sm border-gray-700">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Pesquisar comunidades..."
            className="ml-3 w-full outline-none bg-transparent text-white"
          />
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {communities.map((community) => (
          <div
            key={community.id}
            className="bg-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={community.image}
              alt={community.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {community.name}
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                {community.description}
              </p>

              <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                <Users size={16} />
                {community.members} membros
              </div>

              <button className="mt-5 w-full bg-slate-800 text-white py-2 rounded-xl hover:opacity-90 transition">
                Entrar
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Communities
