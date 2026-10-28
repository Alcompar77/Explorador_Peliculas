/**
 * App.jsx
 * Componente raíz de la aplicación. No tiene lógica propia: define la
 * estructura global
 */

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <NavBar />
        {/* Routes compara la URL actual con cada Route y pinta solo la que
            coincide. */}
        <Routes>
          {/* Definición de las rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />

        </Routes>

      </BrowserRouter>
    </MovieProvider>
  )
}

export default App
