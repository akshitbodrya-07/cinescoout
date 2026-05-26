# CineScout 🎬

> Discover and search movies in real time — powered by a live movie database API.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2C5282?style=for-the-badge)](https://cinescoout.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 📖 About

CineScout is a movie discovery app that lets users search for any film and get real-time results from a live API. The focus was on clean data integration — handling loading states, async errors, and empty results gracefully — while keeping the UI fast and responsive across all devices.

---

## ✨ Features

- 🔍 **Real-Time Search** — fetch live movie data as you type
- ⚡ **Async/Await Handling** — clean API integration with loading indicators and error fallbacks
- 🎥 **Movie Detail View** — see ratings, overview, release date, and more
- 📱 **Fully Responsive** — designed to work on mobile, tablet, and desktop
- 🚫 **Empty State Handling** — friendly UI feedback when no results are found

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components and state management |
| JavaScript (ES6+) | Application logic and API handling |
| HTML5 & CSS3 | Structure and styling |
| RESTful API | Live movie data |
| Vercel | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- A movie API key (e.g. [TMDB](https://www.themoviedb.org/documentation/api))

### Installation

```bash
# Clone the repository
git clone https://github.com/akshitbodrya-07/cinescout.git

# Navigate into the project
cd cinescout

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
```

### Run the App

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
cinescout/
├── public/
├── src/
│   ├── components/       # Reusable UI components (SearchBar, MovieCard, etc.)
│   ├── pages/            # Route-level pages (Home, MovieDetail)
│   ├── services/         # API fetch logic
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

---

## 🔮 Roadmap

- [ ] Add genre filter and sort by rating / release date
- [ ] Watchlist feature with localStorage
- [ ] Trending movies section on homepage
- [ ] Pagination or infinite scroll

---

## 👨‍💻 Author

**Akshit Bodrya**  
[Portfolio](https://akshitportfolio.com) · [LinkedIn](https://www.linkedin.com/in/akshitbodrya/) · [GitHub](https://github.com/akshitbodrya-07)
