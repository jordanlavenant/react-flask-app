import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar.tsx'
import Home from './components/home/home.tsx' 
import Footer from './components/footer/footer.tsx'
import Billeterie from './components/billeterie/billeterie.tsx'
import Programme from './components/programme/programme.tsx'
import Concert from './components/concert/concert.tsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/billeterie"
          element={<Billeterie />} 
        />
        <Route 
          path="/programme"
          element={<Programme />}
        />
        <Route 
          path="/concert/:id"
          element={
            <Concert />
          }
        />
      </Routes>

      <Footer />

    </>
  );
}

export default App
