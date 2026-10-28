/**
 * main.jsx
 * Punto de entrada de la aplicación.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html contiene un <div id="root"></div> vacío. createRoot le dice a React
// que ese div es su contenedor: todo lo que pinte la app aparecerá dentro de él.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
