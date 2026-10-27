import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* Definición de las rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
