import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api";

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

    if (loading) return <div>Cargando Películas...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="home">
            <h1>Películas Populares</h1>
            <div className="movies-list">
                {movies.map((movie) => (
                    <p key={movie.id}>{movie.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home