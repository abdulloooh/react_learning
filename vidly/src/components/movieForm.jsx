import React from "react";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { toast } from "react-toastify";

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

  async componentDidMount() {
    const { data: genres } = await getGenres();
    this.setState({ genres });

    if (this.props.match.params.id === "new") return;

    const { data: movie } = await getMovie(this.props.match.params.id);
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
