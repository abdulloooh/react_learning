import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/userService";
import auth from "../services/authService";

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
      const response = await register(this.state.data);
      // console.log(response);

      auth.loginWithJWT(response.headers["x-auth-token"]);

      window.location = "/";
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
