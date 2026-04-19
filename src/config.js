// ============================================
// TMDB API CONFIGURATION
// ============================================
// 1. Go to https://www.themoviedb.org/settings/api
// 2. Create a free account and request an API key
// 3. Paste your API key below (replace the empty string)
// ============================================

export const API_KEY = "b17561584fab3d2ce2d6535ef15d28a7"; // <-- PUT YOUR TMDB API KEY HERE

export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const GENRES = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  27: "Horror",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const FILTER_GENRES = [
  { id: "all", label: "All" },
  { id: "28", label: "Action" },
  { id: "35", label: "Comedy" },
  { id: "18", label: "Drama" },
  { id: "27", label: "Horror" },
  { id: "878", label: "Sci-Fi" },
  { id: "10749", label: "Romance" },
];
