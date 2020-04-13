import React, { Component } from "react";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    allMovies: [],
    allGenres: [],
    pageSize: 3,
    currentPage: 1,
  };
  componentDidMount() {
    this.setState({
      allMovies: getMovies(),
      allGenres: [{ name: "All Genre" }, ...getGenres()],
    });
  }
  genreChange = (genre) => {
    // console.log(genreName);
    this.setState({ currentPage: 1 });
    this.setState({ selectedGenre: genre });
  };

  handleDelete = (movie) => {
    const movies = this.state.allMovies.filter((m) => m._id !== movie._id);
    this.setState({ allMovies: movies });
  };

  handleClick = (movie) => {
    let movies = [...this.state.allMovies]; //clone
    const index = movies.indexOf(movie);
    movies[index] = { ...this.state.allMovies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ allMovies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      allMovies,
      allGenres,
      pageSize,
      currentPage,
      selectedGenre,
    } = this.state;
    const { length: count } = allMovies;
    // console.log(allGenres);

    if (count === 0)
      return <p className="mt-3">Their are no movies in the database</p>;

    const genreMovies =
      selectedGenre && selectedGenre._id //truth
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;
    const movies = Paginate(genreMovies, pageSize, currentPage);

    return (
      <div className="row mt-5">
        <div className="col-sm-2">
          <ListGroup
            items={allGenres}
            onItemSelect={this.genreChange}
            selectedItem={selectedGenre}
            // keyProperty="_id"
            // valueProperty="name"
          />
        </div>

        <div className="col">
          <p className="mt-2">
            Showing {genreMovies.length} movie{count === 1 ? "" : "s"} in the
            database
          </p>
          <MoviesTable
            movies={movies}
            onClick={this.handleClick}
            onDelete={this.handleDelete}
          />
          <Pagination
            pageSize={pageSize}
            itemsCount={genreMovies.length}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
