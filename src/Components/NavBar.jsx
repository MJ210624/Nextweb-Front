import { NavLink } from "react-router-dom";
import { Home, MessageCircle, Search, Menu } from "lucide-react";
import { useState } from "react";
import Sheet from "./Sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <>
      <nav className="bg-white border-b px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MeuApp</h1>

        {/* Pesquisa */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl w-1/3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Navegação */}
        <div className="flex items-center gap-6">
          
          <NavLink to="/" className="text-gray-600">
            <Home size={20} />
          </NavLink>

          <NavLink to="/chats" className="text-gray-600">
            <MessageCircle size={20} />
          </NavLink>

          {/* Botão menu */}
          <button onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>

        </div>
      </nav>

      <Sheet open={open} setOpen={setOpen} />
    </>
  );
}