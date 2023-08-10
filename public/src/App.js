import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Chat from "./pages/Chat"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
