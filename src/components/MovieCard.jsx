/**
 * MovieCard.jsx
 * Tarjeta individual de una película: póster, título, año y un botón de
 * favorito que aparece en un overlay al pasar el ratón.
 */

import "./MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

    const favorite = isFavorite(movie.id);

    const releaseYear = movie.release_date
        ? movie.release_date.split("-")[0]
        : "Año desconocido";

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path ? (
                    <img
                        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                    />
                ) : (
                    <div className="no-poster">Sin póster</div>
                )}

                <div className={`movie-overlay ${favorite ? "is-favorite" : ""}`}>
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={handleFavoriteClick}
                        aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                    >
                        {favorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{releaseYear}</p>
            </div>
        </div>
    );
}

export default MovieCard;