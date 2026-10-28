/**
 * Home.jsx
 * Página principal (ruta "/"). Se encarga de:
 *  1. Cargar las películas populares al abrirse.
 *  2. Permitir buscar películas por título.
 *  3. Mostrar el estado de la petición: cargando, error, sin resultados o lista.
 */

import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

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
                // Recoge el error que lanza api.js o el de red
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();

    }, []);

    // Se declara fuera del useEffect porque no ocurre solo al montar, depende
    // de una acciín del usuario (enviar el formulario)
    const handleSearch = async (e) => {
        e.preventDefault();

        const queryLimpia = searchQuery.trim();

        // Se reinician los estados antes de cada petición. 
        setLoading(true);
        setError(null);

        try {
            let data;
            // Si el buscador está vacío se muestran las películas
            //populares, sino se busca por texto. 
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
                {/* 1. Cargando */}
                {loading && <p>Cargando...</p>}

                {/* 2. Error */}
                {!loading && error && <p className="error-message">{error}</p>}

                {/* 3. Sin resultados (por ejemplo, una búsqueda que no coincide) */}
                {!loading && !error && movies.length === 0 && (<p>No se encontraron películas.</p>)}

                {/* 4. Lista de películas */}
                {!loading && !error && movies.length > 0 && (
                    <div className="movies-list">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home