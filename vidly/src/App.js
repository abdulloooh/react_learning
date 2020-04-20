import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieId from "./components/common/movie";

function App() {
  return (
    <main role="main" className="container">
      <Navbar />

      <Switch>
        <Route
          path="/movies/:id"
          component={(props) => <MovieId {...props} />}
        />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Redirect from="/" to="/movies" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </main>
  );
}

export default App;
