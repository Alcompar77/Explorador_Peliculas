import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <span>Explorador De Películas</span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    )
}

export default NavBar