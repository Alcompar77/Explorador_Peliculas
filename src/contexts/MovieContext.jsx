/**
 * MovieContext.jsx
 * Estado global de favoritos mediante la Context API de React.
 *
 * Sin contexto, los favoritos tendrían que pasarse por props desde App hasta
 * cada MovieCard (hasta Favorites). Con el contexto, cualquier componente
 * puede leerlos y modificarlos directamente.
 */

import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    if (context === undefined) {
        throw new Error("useMovieContext debe usarse dentro de un MovieProvider");
    }

    return context;
};

export const MovieProvider = ({ children }) => {
    // Lista de películas favoritas. Se guarda cada película ENTERA (no solo su id)
    const [favorites, setFavorites] = useState([]);
    // Indica si ya se han leído los favoritos de localStorage.
    // Importante para no perder datos. 
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        try {
            const stored = localStorage.getItem("favorites");
            if (stored) {
                setFavorites(JSON.parse(stored));
            }
        } catch {
            setFavorites([]);
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites, loaded]);

    // Añade una película, salvo que ya esté (evita duplicados con some).
    const addToFavorites = (movie) => {
        setFavorites((prev) =>
            prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
        );
    };

    // Quita una película por su id.
    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((m) => m.id !== movieId));
    };

    // Devuelve true o false según la película esté o no en favoritos.
    const isFavorite = (movieId) => {
        return favorites.some((m) => m.id === movieId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};