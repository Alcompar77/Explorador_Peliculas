/**
 * Favorites.jsx
 * Página de favoritos (ruta "/favorites"). Muestra las películas que el usuario
 * ha marcado con el corazón.
 *
 * A diferencia de Home, no tiene useState, useEffect ni peticiones a la API:
 * los favoritos viven en el contexto global (MovieContext), que además los
 * guarda y recupera de localStorage. Esta página solo los lee y los pinta.
 */

import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites">
            <h1>Mis Favoritas</h1>

            {/* Renderizado condicional con ternario: si no hay ninguna favorita se
                muestra un mensaje, y si hay, la cuadrícula. */}
            {favorites.length === 0 ? (
                <p className="favorites-empty">
                    Aún no has añadido ninguna película a favoritos.
                </p>
            ) : (
                <div className="movies-list">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;