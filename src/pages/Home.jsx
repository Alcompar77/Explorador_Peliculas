import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();

    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();

        const queryLimpia = searchQuery.trim();

        setLoading(true);
        setError(null);

        try {
            let data;
            if (queryLimpia === "") {
                data = await getPopularMovies();
            } else {
                data = await searchMovies(queryLimpia);
            }
            setMovies(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <h1>Explorador de Películas</h1>

            {/* Formulario de búsqueda*/}
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Buscar película..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            {/* Resultados */}
            <div className="results-container">
                {loading && <p>Cargando...</p>}

                {!loading && error && <p className="error-message">{error}</p>}

                {!loading && !error && movies.length === 0 && (<p>No se encontraron películas.</p>)}

                {!loading && !error && movies.length > 0 && (
                    <div className="movies-list">
                        {movies.map((movie) => (
                            <p key={movie.id}>{movie.title}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home