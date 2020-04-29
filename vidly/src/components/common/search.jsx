import React from "react";

const Search = ({ name, ...rest }) => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" id={name} {...rest} />
    </div>
  );
};

export default Search;
