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
      genreName: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.required(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    genreName: Joi.required(),
    numberInStock: Joi.number().min(0).max(100).required().label("Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
    // publishDate: Joi.required(),
  };

  genres = [];

  componentDidMount() {
    if (this.props.match.params.id) {
      let data = { ...this.state.data };
      const movie = getMovie(this.props.match.params.id);

      if (!movie) return this.props.history.replace("/not-found");

      data._id = movie._id;
      data.title = movie.title;
      data.genreId = movie.genre._id;
      data.genreName = movie.genre.name;
      data.numberInStock = movie.numberInStock;
      data.dailyRentalRate = movie.dailyRentalRate;
      this.setState({ data });
    }

    const genres = getGenres();
    for (let i = 0; i < genres.length; i++) {
      this.genres.push({ id: genres[i]._id, name: genres[i].name });
    }
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
          {this.renderSelect("Genre", "genreId", this.genres)}
          {this.renderInput("Number in Stock", "numberInStock")}
          {this.renderInput("Rate", "dailyRentalRate")}
          {this.renderButton("Update")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
