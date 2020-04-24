import React from "react";

const Input = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="username">{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        // ref={this.username}
        type={type}
        name={name}
        id={name}
        className="form-control"
      />

      <br />

      {error &&
        (error.constructor !== Array ? (
          <div key={error} className="alert alert-danger">
            {error}
          </div>
        ) : (
          error.map((error) => (
            <div key={error} className="alert alert-danger">
              {error}
            </div>
          ))
        ))}
    </div>
  );
};

export default Input;
