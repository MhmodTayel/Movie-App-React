import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstace } from "../network/axiosConfig";
export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axiosInstace
      .get(`/movie/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="movieContainer">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt=""
        />
      </div>
      <div className="data">
        <h1 className="title">{details.title}</h1>
        <p className="overview">{details.overview}</p>
        <p className="date">Release date: {details.release_date}</p>
        <p className="popularity">Popularity: {details.popularity}</p>
        <p className="vote_average">Rating: {details.vote_average}</p>
        <p className="vote_count">Number of votes: {details.vote_count}</p>
      </div>
    </div>
  );
}
