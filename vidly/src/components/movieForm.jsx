import React from "react";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.required(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).required().label("Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
    // publishDate: Joi.required(),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    if (this.props.match.params.id === "new") return;

    const movie = getMovie(this.props.match.params.id);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.replace("/movies");
  };

  render() {
    // const { history, match } = this.props;
    return (
      <React.Fragment>
        <h1>Movie Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("Title", "title")}
          {this.renderSelect("Genre", "genreId", this.state.genres)}
          {this.renderInput("Number in Stock", "numberInStock")}
          {this.renderInput("Rate", "dailyRentalRate")}
          {this.renderButton("Update")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
