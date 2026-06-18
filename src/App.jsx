import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Communities from "./pages/Communities";
import Chats from "./pages/Chats";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/communities" element={<Communities />} />

      <Route
        path="/communities/:communityId"
        element={<CommunityPage />}
      />

      <Route
        path="/communities/:communityId/chats/:chatId"
        element={<Chats />}
      />
    </Routes>
  );
}

export default App;