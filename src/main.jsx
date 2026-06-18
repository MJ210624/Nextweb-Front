import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChatProvider } from "./pages/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChatProvider>
      <App />
    </ChatProvider>  
  </BrowserRouter>

)
