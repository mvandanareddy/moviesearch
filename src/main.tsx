import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// Ensure that MovieSearch is properly exported from the file
import MovieSearch from "../src/components/movieSearch";

// Ensure that the element with ID 'root' exists in your index.html
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("No root element found");
} else {
  createRoot(rootElement).render(
    <StrictMode>
      {/* Ensure MovieSearch is returning valid JSX */}
      <MovieSearch />
    </StrictMode>
  );
}
