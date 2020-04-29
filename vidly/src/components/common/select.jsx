import React from "react";

// value for each option : option label,option value

const Select = ({ label, name, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <select {...rest} name={name} className="form-control">
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>

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

export default Select;
