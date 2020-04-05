import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nav";
import Counters from "./components/counters";

class App extends Component {
  state = {
    //single source of truth

    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (key) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id == key) counter.value++;
      return counter;
    });
    this.setState({ counters });
  };
  handleDelete = (key) => {
    //handling the raised event
    // this.setState({
    //   counters: this.state.counters.filter((counter) => counter.id !== key),
    // });
    //OR
    let counters = this.state.counters.filter((counter) => counter.id !== key);
    this.setState({ counters }); //since key and ppt has the same name
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <NavBar
            total={
              this.state.counters.filter((counter) => counter.value > 0).length
            }
          />
          <Counters
            className="lead"
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
