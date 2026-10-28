/**
 * api.js
 * Capa de acceso a datos: aquí viven todas las peticiones a la API de The Movie
 * Database (TMDB). Los componentes no hacen fetch directamente, sino que llaman
 * a estas funciones.
 */

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

/**
 * Obtiene las películas populares del momento.
 * Endpoint: GET /movie/popular
 */
export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error("Error al obtener las películas");
    }

    const data = await response.json();
    return data.results;
};

/**
 * Busca películas por título.
 * Endpoint: GET /search/movie?query=...
 */
export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    if (!response.ok) {
        throw new Error("Error al buscar películas");
    }

    const data = await response.json();
    return data.results;
};
