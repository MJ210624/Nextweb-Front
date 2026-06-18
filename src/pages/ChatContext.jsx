import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [lastChatId, setLastChatId] = useState(
    localStorage.getItem("lastChatId")
  );

  useEffect(() => {
    if (lastChatId) {
      localStorage.setItem("lastChatId", lastChatId);
    }
  }, [lastChatId]);

  return (
    <ChatContext.Provider value={{ lastChatId, setLastChatId }}>
      {children}
    </ChatContext.Provider>
  );
}