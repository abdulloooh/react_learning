import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required(),
  };

  doSubmit = async () => {
    //call the server
    try {
      const { email, password } = this.state.data;

      const response = await userService.register(this.state.data);
      // console.log(response);

      const jwt = response.headers["x-auth-token"];
      localStorage.setItem("vidly_token", jwt);

      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        {this.renderInput("Email", "email")}
        {this.renderInput("Password", "password", "password")}
        {this.renderInput("Name", "name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default RegisterForm;
