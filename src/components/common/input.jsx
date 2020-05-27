import React from "react";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        // autoFocus
        className="form-control"
        // ref={this.username}
      />

      <br />

      {error &&
        (error.constructor !== Array ? (
          <div key={error} className="alert alert-danger">
            {error}
          </div>
        ) : (
          error.map((err) => (
            <div key={err} className="alert alert-danger">
              {err}
            </div>
          ))
        ))}
    </div>
  );
};

export default Input;
