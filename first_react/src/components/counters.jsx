import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <p>Counter #{counter.id}</p>{" "}
            {/*I do not have to do this tho, can simply pass id and render p tag from the origin end*/}
            {/* <h5>Something</h5> */}
            {/* <p>Another</p> */}
            {/* It will be in form of array in props which can easily be filtered to get the type ("h5" or "p") */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
