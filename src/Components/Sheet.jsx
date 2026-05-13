import { X, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";

function Sheet({ open, setOpen }) {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-5 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4">

          <NavLink
            to="/perfil"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <User size={18} />
            Perfil
          </NavLink>

          <NavLink
            to="/configuracoes"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <Settings size={18} />
            Configurações
          </NavLink>
          

        </div>
      </div>
    </>
  );
}

export default Sheet 