import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

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

  doSubmit = () => {
    //call the server
    console.log("Submitted");
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
