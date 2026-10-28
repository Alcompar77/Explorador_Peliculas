import "./MovieCard.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
    const releaseYear = movie.release_date
        ? movie.release_date.split("-")[0]
        : "Año desconocido";

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

                <div className="movie-overlay">
                    <button className="favorite-btn" aria-label="Añadir a favoritos">
                        ♡
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


