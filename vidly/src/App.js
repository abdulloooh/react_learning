import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import "./App.css";
import RegisterForm from "./components/regsiterForm";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main role="main" className="container">
        {/* Switch>Route*4[path=""][component=""] */}

        <Switch>
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Redirect exact from="/" to="/movies" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
