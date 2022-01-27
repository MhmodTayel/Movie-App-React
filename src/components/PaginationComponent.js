import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { axiosInstace } from "../network/axiosConfig";

export default function PaginationComponent({ setMovies }) {
  const handlePagination = (event, value) => {
    axiosInstace
      .get(`/discover/movie?page=${value}`)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Pagination count={32073} color="primary" onChange={handlePagination} />
  );
}
