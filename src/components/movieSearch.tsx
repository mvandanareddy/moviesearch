// // src/components/MovieSearch.tsx
// import React, { useState } from "react";
// import { MovieCard } from "../components/movieCard";
// import { Movie } from "../types";

// const MovieSearch: React.FC = () => {
//   const [query, setQuery] = useState<string>("");
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(
//         `http://www.omdbapi.com/?s=${query}&apikey=YOUR_VALID_API_KEY` // Replace YOUR_VALID_API_KEY with your actual API key
//       );
//       const data = await response.json();
//       if (data.Response === "True") {
//         setMovies(data.Search);
//         setError(null);
//       } else {
//         setError(data.Error);
//       }
//     } catch (err) {
//       setError("Failed to fetch movies");
//     }
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query.trim()) {
//       fetchMovies();
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search for a movie"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div>
//         {movies.map((movie) => (
//           <MovieCard key={movie.imdbID} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieSearch;
// src/MovieSearch.tsx
// src/MovieSearch.ts

import React, { useState } from "react";
import { Movie } from "../types";

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      console.log("Fetching movies with query:", query); // Debugging line
      const apiKey = import.meta.env.VITE_API_URL;
      console.log(apiKey);

      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
      );
      const data = await response.json();
      console.log("API response data:", data); // Debugging line

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "No movies found");
      }
    } catch (err) {
      console.error("Error fetching movies:", err); // Debugging line
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1
        color="blue"
        style={{
          fontSize: 30,
          color: "blueviolet",
          marginBlock: 20,
          fontWeight: "bold",
        }}
      >
        Movie Search
      </h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          style={{
            padding: "10px",
            width: "80%",
            marginBottom: "20px",
            borderRadius: 10,
          }}
        />
        <button type="submit" style={{ padding: "10px 20px", fontSize: 18 }}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "2px solid #ccc",
              padding: "10px",
              borderRadius: 8,
              gap: 15,
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", borderRadius: 5, height: 200 }}
            />
            <div
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
