import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./../context/languageContext";
import MovieCard from "../components/MovieCard";
import PaginationComponent from "../components/PaginationComponent";
import Variants from "../components/Variants";
import Search from "./../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { getHomeAction } from "../store/actions/homeAction";
import DropDownList from "../components/DropDownList";
export default function Home() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const moviesStord = useSelector((state) => state.home);
  const { contextLang, setContextLang } = useContext(LanguageContext);

  useEffect(() => {
    setMovies(moviesStord);
    console.log(moviesStord);
    setIsLoading(false);
  }, [moviesStord]);

  useEffect(() => {
    dispatch(getHomeAction(contextLang));
  }, [contextLang]);

  const loadings = [];
  for (let i = 0; i < 20; i++) {
    loadings.push(<Variants key={i} />);
  }

  return (
    <>
      <Search setMovies={setMovies} />
      <DropDownList />
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
