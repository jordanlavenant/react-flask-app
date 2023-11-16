import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar.tsx'
import Home from './components/home/home.tsx' 
import Billeterie from './components/billeterie/billeterie.tsx'
import Programme from './components/programme/programme.tsx'

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
