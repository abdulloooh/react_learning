import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),
    password: Joi.string().min(5).required().label("Password"),
  };

  // username = React.createRef();
  //do not always use ref just to make things happen
  //avoid document object, that is the purpose of react, the abstraction
  //uncontrolled to controlled forbidden
  //undefined and null can't be value of controlled elements, when used.. that is uncontrolled,thus...
  //...has diff state and no single source of truth

  // componentDidMount = () => {
  //   // this.username.current.focus();
  // };

  doSubmit() {
    //call the server
    console.log("Submitted");
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form action="" onSubmit={this.handleSubmit}>
          {/* do things at lower level first before extracting them */}

          {this.renderInput("Username", "username")}

          {this.renderInput("Password", "password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
