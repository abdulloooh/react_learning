import React, { Component } from "react";
// import { isEqual } from "lodash";

class Counter extends Component {
  // we need a single source of truth
  // a controlled component should be controlled by its parent and should not have its own local state

  // shouldComponentUpdate(nextProp, nextState) {
  //   // Use lodash is Equal
  //   console.log("checking next props", isEqual(nextProp, this.props));
  //   console.log("checking next state", isEqual(nextState, this.state));

  //   return true;
  // }

  // shouldComponentUpdate(nextProp, nextState) {
  //   return !isEqual(nextProp, this.props) || !isEqual(nextState, this.state);
  // }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prev state ", prevState);
    console.log("prev props ", prevProps.counter);
    console.log("new props", this.props.counter);
    if (prevProps.counter.value !== this.props.value) {
      //do something
    }
  }
  componentWillUnmount() {
    console.log("App - Unmount");
  }

  render() {
    // console.log("props", this.props); //props is a javascript object

    console.log("Counter - rendered");

    const { children, onIncrement, counter, onDelete } = this.props;
    return (
      <div>
        {children} {/*props is read-only*/}
        <span className={this.setBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            onIncrement(counter.id);
          }}
          className="btn btn-secondary btn-md"
        >
          Increment
        </button>
        <button
          // onClick={onDelete} //raising an event
          // OR logic can be done here
          onClick={() => onDelete(counter.id)}
          className="btn btn-md m-3 btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  setBadgeClass() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
