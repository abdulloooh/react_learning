import React, { Component } from "react";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    allMovies: [],
    allGenres: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    this.setState({
      allMovies: getMovies(),
      allGenres: [{ _id: "", name: "All Genre" }, ...getGenres()],
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
    deleteMovie(movie._id);
  };

  handleClick = (movie) => {
    let movies = [...this.state.allMovies]; //clone
    const index = movies.indexOf(movie);
    movies[index] = { ...this.state.allMovies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ allMovies: movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  // handleSort = (path) => {
  //   let sortColumn = { ...this.state.sortColumn };
  //   if (path === sortColumn.path)
  //     sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //   else {
  //     sortColumn.path = path;
  //     sortColumn.order = "asc";
  //   }
  //   this.setState({ sortColumn });
  // };

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
      sortColumn,
    } = this.state;
    const { length: count } = allMovies;
    // console.log(allGenres);

    if (count === 0)
      return <p className="mt-3">Their are no movies in the database</p>;

    const { totalCount, movies } = this.getPagedData(
      selectedGenre,
      allMovies,
      sortColumn,
      pageSize,
      currentPage
    );
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
          <button className="btn btn-primary">
            <a onClick={() => this.props.history.push("/movies/new")}>
              New Movie
            </a>
          </button>
          <p className="mt-2">
            Showing {totalCount} movie{count === 1 ? "" : "s"} in the database
          </p>
          <MoviesTable
            movies={movies}
            onClick={this.handleClick}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            pageSize={pageSize}
            itemsCount={totalCount}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }

  getPagedData(selectedGenre, allMovies, sortColumn, pageSize, currentPage) {
    const filtered =
      selectedGenre && selectedGenre._id //truth
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;
    // const sorted = _.sortBy(filtered, this.state.sortColumn.path); //only for ascending sorting
    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);
    const movies = Paginate(sorted, pageSize, currentPage);
    return { totalCount: filtered.length, movies };
  }
}

export default Movies;
