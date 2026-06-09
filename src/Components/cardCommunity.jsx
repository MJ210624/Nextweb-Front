import Getcommunities from "../services/CommunityServices";

function CardCommunities({ communities }) {
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {communities.map((community) => (
                <div
                    key={community.id}
                    className="bg-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition w-"
                >
                    <img
                        src="#"
                        alt={community.nameCommunity}
                        className="h-40 w-full object-cover"
                    />

                    <div className="p-5">
                        <h2 className="text-xl font-semibold">
                            {community.nameCommunity}
                        </h2>

                        <button className="mt-5 w-full bg-slate-800 text-white py-2 rounded-xl hover:opacity-90 transition">
                            Entrar
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CardCommunities