import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onClick, onDelete } = props;

  return (
    <table className="table ">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th colSpan="3">Rate</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          return (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.like} onClick={() => onClick(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => {
                    onDelete(movie);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;

//this was extracted here for consistency, i.e to avoid mixing low level codes with the high level codes where it was
