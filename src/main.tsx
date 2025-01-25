import { createRoot } from "react-dom/client";
import "./index.css";
// import { AverageMarks } from "./components/averageMarks";
// Ensure that MovieSearch is properly exported from the file
// import MovieSearch from "../src/components/movieSearch";
// import { Library } from "./components/library";
// import { Average } from "./components/avg";
// 
// import Task from './components/practice'
// import { New } from "./components/practice";
import  Sudoku from "./components/task";
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("No root element found");
} else {
  createRoot(rootElement).render(
    <div style={{alignItems:'center', justifyContent:'center'}} >
      {/* Ensure MovieSearch is returning valid JSX */}
      {/* <MovieSearch /> */}
      {/* <Library /> */}
      {/* <AverageMarks /> */}
      {/* <Average /> */}
      {/* <Calculator />
      <Todo /> */}
      {/* <New/> */}
      <Sudoku/>
  </div>
  );
}
