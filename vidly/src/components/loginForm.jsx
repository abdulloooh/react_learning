import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().min(3).max(30).required().label("Email"),
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

  async doSubmit() {
    //call the server
    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);

      window.location.assign("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
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
