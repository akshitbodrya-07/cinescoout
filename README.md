# 🎬 CineScout — Movie Search App

A responsive movie discovery app built with **React + Vite** using the TMDB API.

## Features
- Search movies in real-time
- Filter by genre (Action, Comedy, Drama, Horror, Sci-Fi, Romance)
- Browse trending movies of the week
- Movie detail modal with backdrop, rating, runtime & genres
- Smooth card animations
- Fully responsive layout

## Tech Stack
- React 18
- Vite
- CSS Modules
- TMDB REST API
- Custom React Hook (`useMovies`)

## Setup

### 1. Get a TMDB API Key
- Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- Create a free account
- Request an API key (free)

### 2. Add Your API Key
Open `src/config.js` and paste your key:
```js
export const API_KEY = "your_api_key_here"; // <-- paste here
```

### 3. Install & Run
```bash
npm install
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Deploy to Vercel
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done!

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
