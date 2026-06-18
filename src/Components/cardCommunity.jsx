import { useNavigate } from "react-router-dom";

function CardCommunities({ communities }) {
  const navigate = useNavigate();

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {communities.map((community) => (
        <div
          key={community.id}
          className="bg-gray-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
        >
          

          <div className="p-5">
            <h2 className="text-xl text-white font-semibold">
              {community.nameCommunity}
            </h2>

            <button
              onClick={() =>
                navigate(`/chats/${community.id}`)
              }
              className="mt-4 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
            >
              Entrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardCommunities;