import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { LanguageContext } from "./../context/languageContext";

export default function DropDownList() {
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const [lang, setLang] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setLang(event.target.value);
    setContextLang(event.target.value);
    console.log("from dropdown", contextLang);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>En</MenuItem>
          <MenuItem value={"ar"}>Ar</MenuItem>
          <MenuItem value={"fr"}>Fr</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
