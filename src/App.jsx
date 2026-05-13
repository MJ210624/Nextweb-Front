import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  return(
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/homepage" element={<HomePage />} />    
   </Routes> 
  )
}

export default App;