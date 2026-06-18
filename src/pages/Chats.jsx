import { useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "../Components/NavBar";

function Chats() {
    const { chatId } = useParams();

    const [messages, setMessages] = useState([
        {
            id: 1,
            author: "Sistema",
            text: "Bem-vindo ao canal!"
        }
    ]);

    const [text, setText] = useState("");

    function sendMessage() {
        if (!text.trim()) return;

        setMessages([
            ...messages,
            {
                id: Date.now(),
                author: "Você",
                text
            }
        ]);

        setText("");
    }

    return (
        <div className="min-h-screen bg-gray-800">
            <NavBar />

            <div className="max-w-5xl mx-auto p-8">
                <h1 className="text-3xl text-white font-bold">
                    Canal #{chatId}
                </h1>

                <div className="bg-gray-700 rounded-2xl mt-6 p-6 h-[500px] overflow-y-auto">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className="mb-4 text-white"
                        >
                            <strong>{msg.author}:</strong> {msg.text}
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-4">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1 p-3 rounded-xl"
                        placeholder="Digite uma mensagem..."
                    />

                    <button
                        onClick={sendMessage}
                        className="bg-blue-600 text-white px-6 rounded-xl"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chats;