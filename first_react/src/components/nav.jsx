import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Total
          <span className="badge badge-pill badge-primary m-1">
            {this.props.total}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
