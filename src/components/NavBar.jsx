/**
 * NavBar.jsx
 * Barra de navegación superior. Muestra el título de la app y los enlaces para
 * moverse entre Home ("/") y Favorites ("/favorites").
 */

import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <span className="navbar-brand">Explorador de Películas</span>

            <div className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;