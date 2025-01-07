import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { AverageMarks } from "./components/averageMarks";
// Ensure that MovieSearch is properly exported from the file
// import MovieSearch from "../src/components/movieSearch";
// import { Library } from "./components/library";
// import { Average } from "./components/avg";
import { Calculator } from "./components/calculator";
import { Todo } from "./components/todo";
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("No root element found");
} else {
  createRoot(rootElement).render(
    <StrictMode>
      {/* Ensure MovieSearch is returning valid JSX */}
      {/* <MovieSearch /> */}
      {/* <Library /> */}
      {/* <AverageMarks /> */}
      {/* <Average /> */}
      <Calculator />
      <Todo />
    </StrictMode>
  );
}
