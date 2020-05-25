import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import { Link } from "react-router-dom";
//sortColumn : object
//onSort
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (item) =>
        this.props.adminCheck ? (
          <Link to={`/movies/${item._id}`}>{item.title}</Link>
        ) : (
          item.title
        ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.like} onClick={() => this.props.onClick(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) =>
        this.props.adminCheck && (
          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => {
              this.props.onDelete(movie);
            }}
          >
            Delete
          </button>
        ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;

//this was extracted here for consistency, i.e to avoid mixing low level codes with the high level codes where it was
