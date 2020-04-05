import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter} //just pass the entire counter object
            // onDelete={() => {
            //   this.handleDelete(counter.id);
            // }}
            // OR the logic can be at the component side
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            <p>Counter #{counter.id}</p>{" "}
            {/*I do not have to do this tho, can simply pass id and render p tag from the origin end*/}
            {/* <h5>Something</h5> */}
            {/* <p>Another</p> */}
            {/* It will be in form of array in props which can easily be filtered to get the type ("h5" or "p") */}
          </Counter>
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-info btn-sm m-3"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
