import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites">
            <h1>Mis Favoritas</h1>

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