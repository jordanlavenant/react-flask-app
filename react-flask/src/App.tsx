import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar.tsx'
import Home from './home.tsx' 
import Billeterie from './billeterie.tsx'
import Programme from './programme.tsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billeterie" element={<Billeterie />} />
        <Route path="/programme" element={<Programme />} />
      </Routes>
    </>
  );
}

export default App
