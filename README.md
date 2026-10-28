# Explorador de Películas

Aplicación web hecha con React que consume la API de [The Movie Database (TMDB)](https://www.themoviedb.org/). Permite consultar las películas populares, buscar por título y guardar una lista de favoritos que se conserva entre sesiones.

## Funcionalidades

- Películas populares al cargar la página.
- Búsqueda de películas por título.
- Indicador de carga y mensaje de error si falla la petición a la API.
- Tarjetas con póster, título y año, y un botón de favorito que aparece al pasar el ratón.
- Favoritos guardados en `localStorage`, con una página dedicada.
- Barra de navegación fija con React Router (`/` y `/favorites`).


## Instalación

Necesitas Node.js instalado y una API Key gratuita de TMDB (se consigue registrándose en https://www.themoviedb.org/).

1. Clona el repositorio e instala las dependencias:

   ```bash
   git clone [URL-de-tu-repositorio]
   cd [nombre-de-la-carpeta]
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto, a partir de `.env.example`, con tu clave:

   ```
   VITE_TMDB_API_KEY=tu_clave
   ```

3. Arranca la aplicación:

   ```bash
   npm run dev
   ```

   Se abrirá en `http://localhost:5173`.

## Estructura del proyecto

```
src/
├── components/   NavBar y MovieCard
├── contexts/     MovieContext (estado global de favoritos)
├── pages/        Home y Favorites
├── services/     api.js (llamadas a TMDB)
├── App.jsx       rutas y provider del contexto
└── main.jsx
```

## Notas

- La API Key se guarda en `.env`, que no se sube al repositorio.
- Las películas favoritas se guardan completas en `localStorage`, por lo que la página de favoritos no necesita hacer peticiones a la API.
