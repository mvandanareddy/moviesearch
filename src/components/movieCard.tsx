import React from "react";
import { Movie } from "../types";

export interface MovieCardProps {
  movie: Movie;
}
export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};
