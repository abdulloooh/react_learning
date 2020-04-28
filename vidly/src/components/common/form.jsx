import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import _ from "lodash";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);

    if (!result.error) return null;

    result.error.details.map((error) => {
      if (errors[error.path[0]])
        return errors[error.path[0]].push(error.message);
      else return (errors[error.path[0]] = new Array(error.message));
    });
    //because I want to collect all errors, if not I should  only get first and not an array

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return false;
    // const username = this.username.current.value;
    this.doSubmit();
  };

  validateProperty = (name, value) => {
    //we can extract new object here tho and use ES6 computed property e.g

    // const data = { [name]: value };
    // const Schema = { [name]: this.Schema[name] };

    const result = Joi.validate(value, this.schema[name]).error;
    return result ? result.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });

    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(name, value);
    if (!errorMessage) delete errors[name];
    else errors[name] = errorMessage;

    this.setState({ errors });
  };

  renderInput(label, name, type = "text") {
    const { errors, data } = this.state;
    return (
      <Input
        id={name}
        label={label}
        name={name}
        type={type}
        value={_.get(data, name)}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(label, name, options) {
    const { errors, data } = this.state;
    return (
      <Select
        label={label}
        id={name}
        name={name}
        value={_.get(data, name)}
        onChange={this.handleChange}
        options={options}
        error={errors[name]}
      ></Select>
    );
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }
}
export default Form;
