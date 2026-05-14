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
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 shadow-lg p-5 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-slate-300">Menu</h2>
          <button className=" text-slate-300" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4">

          <NavLink
            to="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-slate-300 hover:text-black"
          >
            <User size={18} />
            Perfil
          </NavLink>

          <NavLink
            to="/configurations"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-slate-300 hover:text-black"
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