import React, { Component } from "react";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";
import Search from "./common/search";
import { toast } from "react-toastify";

class Movies extends Component {
  state = {
    allMovies: [],
    allGenres: [],
    pageSize: 3,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };
  async componentDidMount() {
    const { data: genres } = await getGenres();
    const { data: allMovies } = await getMovies();
    this.setState({
      allMovies,
      allGenres: [{ _id: "", name: "All Genres" }, ...genres],
    });
  }

  genreChange = (genre) => {
    // console.log(genreName);
    this.setState({ currentPage: 1 });
    this.setState({ selectedGenre: genre, searchQuery: "" });
  };

  handleDelete = async (movie) => {
    const originalMovies = this.state.allMovies;
    const movies = this.state.allMovies.filter((m) => m._id !== movie._id);
    this.setState({ allMovies: movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie can not be found");
      } else if (ex.response && ex.response.status === 400) {
        toast.error("Invalid request");
      }

      this.setState({ allMovies: originalMovies });
    }
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

  handleSearch = ({ currentTarget }) => {
    const searchQuery = currentTarget.value;

    const currentPage = 1;

    this.setState({ searchQuery, currentPage, selectedGenre: null });
  };

  render() {
    const {
      allMovies,
      allGenres,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery,
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
      currentPage,
      searchQuery
    );
    return (
      <React.Fragment>
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
            {/* <button className="btn btn-primary">
              <a onClick={() => this.props.history.push("/movies/new")}>
                New Movie
              </a>
            </button> */}
            <Link className="btn btn-primary" to="/movies/new">
              Add Movie
            </Link>

            <p className="mt-2">
              Showing {totalCount} movie{count === 1 ? "" : "s"} in the database
            </p>

            <Search
              name="search"
              placeholder="Search..."
              onChange={this.handleSearch}
              value={searchQuery}
            />

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
      </React.Fragment>
    );
  }

  getPagedData(
    selectedGenre,
    allMovies,
    sortColumn,
    pageSize,
    currentPage,
    searchQuery
  ) {
    const filtered =
      selectedGenre && selectedGenre._id //truth
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : searchQuery
        ? allMovies.filter((movie) =>
            movie.title.toLowerCase().startsWith(searchQuery)
          )
        : allMovies;
    // const sorted = _.sortBy(filtered, this.state.sortColumn.path); //only for ascending sorting
    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);
    const movies = Paginate(sorted, pageSize, currentPage);
    return { totalCount: filtered.length, movies };
  }
}

export default Movies;
