import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Communities from "./pages/Communities";
import CommunityChat from "./pages/CommunityChat";
import Profile from "./pages/Profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/chats/:communityId" element={<CommunityChat />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;