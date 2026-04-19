# 🎬 CineScout — Movie Search App

🔗 Live Demo: https://cinescoout.vercel.app

A responsive movie discovery app built with React + Vite using the TMDB API.

## Features
- Search movies in real-time
- Filter by genre (Action, Comedy, Drama, Horror, Sci-Fi, Romance)
- Browse trending movies of the week
- Movie detail modal with backdrop, rating, runtime & genres
- Smooth card animations & fully responsive layout

## Tech Stack
- React 18, Vite
- CSS Modules
- TMDB REST API
- Custom React Hook (useMovies)

### 1. Get a TMDB API Key
- Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- Create a free account
- Request an API key (free)

## Project Structure
```
src/
  components/
    SearchBar.jsx       # Search input + button
    SearchBar.module.css
    FilterBar.jsx       # Genre filter buttons
    FilterBar.module.css
    MovieCard.jsx       # Individual movie card
    MovieCard.module.css
    MovieModal.jsx      # Movie detail popup
    MovieModal.module.css
  hooks/
    useMovies.js        # Custom hook for all API calls
  config.js             # API key + constants (edit this!)
  App.jsx               # Main app component
  App.css               # Global styles
  main.jsx              # React entry point
```
