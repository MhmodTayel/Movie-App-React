import * as React from "react";
import { useState } from "react";
import "./Navbar.css";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { axiosInstace } from "../network/axiosConfig";

export default function Search({ setMovies }) {
  const [text, setText] = useState("");

  const handelChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    axiosInstace
      .get(`/search/movie?query=${text}`)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          placeholder="Search"
          value={text}
          onChange={(e) => handelChange(e)}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon onClick={handleSearch}  className="SearchIcon"/>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
