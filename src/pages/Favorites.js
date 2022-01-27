import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
export default function Favorites() {
  const movies = useSelector((state) => state.favorite);

  return (
    <>
      <div className="moviesGrid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            className="movieCard"
            isLiked={true}
          ></MovieCard>
        ))}
      </div>
    </>
  );
}
