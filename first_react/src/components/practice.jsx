import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   // console.log("constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    count: 0,
    homeAddress: {
      street: "whatever",
      number: "some number",
      other: "etc",
    },
    tags: [1, 2, 3, 4],
  };

  styles = {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  };

  render() {
    return (
      <React.Fragment>
        <img src={"https://picsum.photos/200"} alt="a random" className="m-4" />
        <span
          style={{
            fontFamily: "gabriola",
            padding: 10,
          }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.handleIncrement(this.styles.fontSize)} //event handlers syntax, it takes function referennce and not the fcn itself
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Count
        </button>

        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>but doing it dynamically is as below</li> <br />
          {this.state.tags.length === 0 && "Please input your list"}
          {this.renderTags()}
        </ul>
      </React.Fragment>
    );
  }

  //arrow function but does not rebind "this" but inherit it
  // doHandleIncrement = () => {    //coverted to inline already
  //   this.handleIncrement("Hello");
  // };
  handleIncrement = (param) => {
    console.log(param);
    // console.log("hello", this);
    this.setState({ count: this.state.count + 1 });
    //object----this.method(), this will return a reference of the object
    //function----this.sth(),   it will return that of the window for non-strict mode but undefined for strict mode
  };

  renderTags() {
    //just showing if application, should have just used ternary op
    if (this.state.tags.length === 0) {
      return <p>Empty tags, sorry!</p>;
    }
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-5 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //object destructuring
    const { street } = this.state.homeAddress;

    return count === 0 ? (
      <span>empty {street} or just use plain text here eg 'zero'</span>
    ) : (
      count
    );
  }
}

export default Counter;
