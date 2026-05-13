import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  MessageCircle,
  Search,
  Menu,
} from "lucide-react";

import { useState } from "react";
import Sheet from "./Sheet";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 border-b border-gray-700 px-4 py-3">

        {/* Linha principal */}
        <div className="flex items-center justify-between gap-4 flex-wrap">

          {/* Logo */}
          <h1 className="text-xl font-bold text-white shrink-0">
            NextWeb
          </h1>

          {/* Navegação */}
          <div className="flex items-center gap-4 order-3 sm:order-none w-full sm:w-auto justify-center">

            <NavLink
              to="/homepage"
              className={({ isActive }) =>
                `transition p-2 rounded-lg ${
                  isActive
                    ? "text-blue-500 bg-gray-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`
              }
            >
              <Home size={22} />
            </NavLink>

            <NavLink
              to="/chats"
              className={({ isActive }) =>
                `transition p-2 rounded-lg ${
                  isActive
                    ? "text-blue-500 bg-gray-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`
              }
            >
              <MessageCircle size={22} />
            </NavLink>

            <NavLink
              to="/communities"
              className={({ isActive }) =>
                `transition p-2 rounded-lg ${
                  isActive
                    ? "text-blue-500 bg-gray-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`
              }
            >
              <Users size={22} />
            </NavLink>

          </div>

          {/* Pesquisa */}
          <div className="flex items-center bg-gray-700 px-3 py-2 rounded-xl flex-1 min-w-[180px] max-w-md">

            <Search size={18} className="text-gray-400 shrink-0" />

            <input
              type="text"
              placeholder="Pesquisar..."
              className="bg-transparent outline-none ml-2 w-full text-sm text-white placeholder:text-gray-400"
            />
          </div>

          {/* Menu */}
          <button
            onClick={() => setOpen(true)}
            className="text-gray-300 hover:text-white transition shrink-0"
          >
            <Menu size={24} />
          </button>

        </div>

      </nav>

      <Sheet open={open} setOpen={setOpen} />
    </>
  );
}

export default NavBar;