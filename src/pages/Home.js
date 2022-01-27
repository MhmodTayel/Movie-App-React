import React, { useState, useEffect } from "react";
import { axiosInstace } from "../network/axiosConfig";
import MovieCard from "../components/MovieCard";
import PaginationComponent from "../components/PaginationComponent";
import Variants from "../components/Variants";
import Search from "./../components/Search";
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosInstace
      .get("/discover/movie")
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const loadings = [];
  for (let i = 0; i < 20; i++) {
    loadings.push(<Variants key={i} />);
  }

  return (
    <>
      <Search setMovies={setMovies} />
      <div className="moviesGrid">
        {isLoading
          ? loadings
          : movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={{ ...movie, isLiked: false }}
                className="movieCard"
                isLiked={false}
              ></MovieCard>
            ))}
      </div>
      <PaginationComponent setMovies={setMovies} className="pagination" />
    </>
  );
}
