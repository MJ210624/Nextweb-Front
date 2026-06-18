import { NavLink } from "react-router-dom";
import { Home, Users, MessageCircle, Search, Menu, User2Icon, Settings, } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../pages/ChatContext";

function NavBar() {

  const context = useContext(ChatContext);

  const lastChatId = context?.lastChatId;

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-700 px-4 py-3">

        <div className="flex items-center justify-between gap-4 flex-wrap">

          <h1 className="text-xl font-bold text-slate-300 shrink-0">

            <NavLink to="/homepage">
              NextWeb
            </NavLink>
          </h1>

          <div className="flex items-center gap-4 flex-wrap justify-end flex-1">



            <div className="flex items-center gap-2">

              <NavLink to="/homepage" className={({ isActive }) => `transition p-2 rounded-lg ${isActive ? "text-blue-500 bg-gray-700" : "text-gray-300 hover:text-white hover:bg-gray-700"}`} >
                <Home size={22} />
              </NavLink>



              {lastChatId ? (
                <NavLink to={`/chats/${lastChatId}`} className={({ isActive }) => `transition p-2 rounded-lg ${isActive ? "text-blue-500 bg-gray-700" : "text-gray-300 hover:text-white hover:bg-gray-700"}`} >
                  <MessageCircle size={22} />
                </NavLink>
              ) : (
                <button disabled>
                  <MessageCircle size={22} />
                </button>
              )}


              <NavLink to="/communities" className={({ isActive }) => `transition p-2 rounded-lg ${isActive ? "text-blue-500 bg-gray-700" : "text-gray-300 hover:text-white hover:bg-gray-700"}`} >
                <Users size={22} />
              </NavLink>


              
            </div>

            <NavLink to="/profile" className={({ isActive }) => `transition p-2 rounded-lg ${isActive ? "text-blue-500 bg-gray-700" : "text-gray-300 hover:text-white hover:bg-gray-700"}`} >
              <User2Icon size={22} />
            </NavLink>
          </div>

        </div>

      </nav>

    </>
  );
}

export default NavBar;