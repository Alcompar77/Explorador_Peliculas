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
