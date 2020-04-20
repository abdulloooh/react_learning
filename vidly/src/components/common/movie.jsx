import React from "react";

const MovieId = ({ history, match }) => {
  return (
    <React.Fragment>
      <h1>Movie Form {match.params.id}</h1>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => history.goBack()}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieId;
