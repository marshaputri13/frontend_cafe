import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login"
import Home from "./pages/home"
import Kasir from "./pages/kasir"
import Admin from "./pages/admin"
import Manajer from "./pages/manajer"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kasir" element={<Kasir />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manajer" element={<Manajer/>} />
      </Routes>
    </BrowserRouter>
  )
}