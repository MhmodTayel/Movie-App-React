import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonAppBar() {
  let count = useSelector((state)=> state.favorite.length)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div>
            <Button color="inherit">
              <NavLink to="/home" activeClassName="selected">
                Movies
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/favorites" activeClassName="selected">
                <Badge badgeContent={count} color="action">
                  <FavoriteIcon color="error" />
                </Badge>
              </NavLink>
            </Button>
          </div>
          <div>
            <Button color="inherit">
              <NavLink to="/login" activeClassName="selected">
                Login
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/register" activeClassName="selected">
                Register
              </NavLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
