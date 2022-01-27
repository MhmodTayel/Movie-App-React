import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import notFound from "./pages/notFound";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={"/home"} exact component={Home} />
          <Route path={"/"} exact component={Home} />
          <Route path={"/favorites"} exact component={Favorites} />
          <Route path={"/register"} exact component={Register} />
          <Route path={"/details/:id"} exact component={MovieDetails} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"*"} exact component={notFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
