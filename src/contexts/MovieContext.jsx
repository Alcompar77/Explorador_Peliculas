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
    const [favorites, setFavorites] = useState([]);
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

    const addToFavorites = (movie) => {
        setFavorites((prev) =>
            prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
        );
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((m) => m.id !== movieId));
    };

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