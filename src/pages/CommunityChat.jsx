import { useState } from "react";
import NavBar from "../Components/NavBar";
import { Plus, Hash, Send, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ChatContext } from "./ChatContext";

function CommunityPage() {
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "geral",
      messages: [
        {
          id: 1,
          author: "Sistema",
          text: "Bem-vindo ao canal geral!"
        }
      ]
    },
    {
      id: 2,
      name: "dúvidas",
      messages: [
        {
          id: 1,
          author: "João",
          text: "Alguém sabe usar Context API?"
        }
      ]
    },
    {
      id: 3,
      name: "projetos",
      messages: [
        {
          id: 1,
          author: "Maria",
          text: "Compartilhem seus projetos aqui 🚀"
        }
      ]
    },
    {
      id: 4,
      name: "off-topic",
      messages: []
    }
  ]);

  const [selectedChannel, setSelectedChannel] = useState(0);
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");

  function sendMessage() {
    if (!message.trim()) return;

    const updatedChannels = [...channels];

    updatedChannels[selectedChannel].messages.push({
      id: Date.now(),
      author: "Você",
      text: message
    });

    setChannels(updatedChannels);
    setMessage("");
  }

  function createChannel() {
    if (!newChannelName.trim()) return;

    setChannels([
      ...channels,
      {
        id: Date.now(),
        name: newChannelName.toLowerCase(),
        messages: [
          {
            id: 1,
            author: "Sistema",
            text: `Bem-vindo ao canal #${newChannelName}!`
          }
        ]
      }
    ]);

    setNewChannelName("");
    setShowModal(false);
  }

  const { communityId } = useParams();
  const { setLastChatId } = useContext(ChatContext);

  useEffect(() => {
  if (communityId) {
    setLastChatId(communityId);
  }
}, [communityId, setLastChatId]);


  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <header>
        <NavBar />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-gray-900 border-r border-gray-700 flex flex-col">
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white">
              NextWeb
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Comunidade
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Canais
            </p>

            <div className="space-y-2">
              {channels.map((channel, index) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    selectedChannel === index
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <Hash size={18} />
                  <span>{channel.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
            >
              <Plus size={18} />
              Criar Canal
            </button>
          </div>
        </aside>

        {/* Chat */}
        <main className="flex-1 flex flex-col">
          {/* Header do canal */}
          <div className="bg-gray-700 border-b border-gray-600 px-6 py-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Hash size={24} />
              {channels[selectedChannel].name}
            </h2>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {channels[selectedChannel].messages.length === 0 ? (
              <div className="text-gray-400">
                Nenhuma mensagem ainda.
              </div>
            ) : (
              channels[selectedChannel].messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-gray-700 rounded-2xl p-4"
                >
                  <p className="text-white font-semibold">
                    {msg.author}
                  </p>

                  <p className="text-gray-200 mt-1">
                    {msg.text}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-700 bg-gray-800">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={`Enviar mensagem para #${channels[selectedChannel].name}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="flex-1 bg-gray-700 text-white rounded-2xl px-5 py-3 outline-none border border-gray-600 focus:border-blue-500"
              />

              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-2xl transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-3xl w-full max-w-md p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Criar Canal
              </h2>

              <button onClick={() => setShowModal(false)}>
                <X />
              </button>
            </div>

            <input
              type="text"
              placeholder="Nome do canal"
              value={newChannelName}
              onChange={(e) => setNewChannelName(e.target.value)}
              className="mt-6 w-full border rounded-xl px-4 py-3 outline-none"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl border"
              >
                Cancelar
              </button>

              <button
                onClick={createChannel}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
              >
                Criar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityPage;