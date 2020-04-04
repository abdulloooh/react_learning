import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    // console.log("props", this.props); //props is a javascript object
    return (
      <div>
        {this.props.children}
        <span className={this.setBadgeClass()}>{this.formatCount()}</span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = () => this.setState({ value: this.state.value + 1 });
  setBadgeClass() {
    let classes = "badge m-3 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
