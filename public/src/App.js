import React, { useEffect } from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Chat from "./pages/Chat"
import SetAvatar from "./pages/SetAvatar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
        <Route path="/setavatar" element={<SetAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}
