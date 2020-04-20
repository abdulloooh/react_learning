import React from "react";

const MovieId = ({ history, match }) => {
  return (
    <React.Fragment>
      <h1>Movie Form {match.params.id}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => history.push("/movies")} // we can't use this.handleSave there being a functional component
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieId;
