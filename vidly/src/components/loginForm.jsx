import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // username = React.createRef();
  //do not always use ref just to make things happen
  //avoid document object, that is the purpose of react, the abstraction
  //uncontrolled to controlled forbidden
  //undefined and null can't be value of controlled elements, when used.. that is uncontrolled,thus...
  //...has diff state and no single source of truth

  componentDidMount = () => {
    // this.username.current.focus();
  };

  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);

    if (!result.error) return null;

    result.error.details.map((error) => {
      if (errors[error.path[0]])
        return errors[error.path[0]].push(error.message);
      else return (errors[error.path[0]] = new Array(error.message));
    });
    //because I want to collect all errors, if not I should  only get first and not an array

    return errors;
  };
  validateProperty(name, value) {
    //we can extract new object here tho and use ES6 computed property e.g

    // const account = { [name]: value };
    // const Schema = { [name]: this.Schema[name] };

    const result = Joi.validate(value, this.schema[name]).error;

    return result ? result.details[0].message : null;
  }

  handleLogin = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return false;
    // const username = this.username.current.value;
    //call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;

    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account });

    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(name, value);
    if (!errorMessage) delete errors[name];
    else errors[name] = errorMessage;

    this.setState({ errors });
  };

  render() {
    const { username, password } = this.state.account;
    const { errors } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form action="" onSubmit={this.handleLogin}>
          {/* do things at lower level first before extracting them */}
          <Input
            label="username"
            name="username"
            type="text"
            value={username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            label="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
