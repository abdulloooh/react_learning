import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import authService from "../services/authService";
import Form from "./common/form";

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

  populateGenre = async () => {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  };

  populateMovie = async () => {
    if (this.props.match.params.id === "new") return;

    if (this.props.match.params.id !== "new")
      if (!authService.getCurrentUser().isAdmin) window.location = "/";

    try {
      const { data: movie } = await getMovie(this.props.match.params.id);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie can not be found", { autoclose: 3000 });
        return this.props.history.replace("/not-found");
      }
    }
  };

  async componentDidMount() {
    await this.populateGenre();
    await this.populateMovie();
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
  doSubmit = async () => {
    try {
      await saveMovie(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie can not be found");
      } else if (ex.response && ex.response.status === 400) {
        toast.error("Invalid request");
      }
    }

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
