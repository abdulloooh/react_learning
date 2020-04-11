import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nav";
import Counters from "./components/counters";
class App extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("prev state ", prevState);
    console.log("prev state ", prevState.counters);
    console.log("new state", this.state.counters);
  }
  state = {
    //single source of truth

    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    //this is where you set all the ppts needed for this component before rendering
    //eg
    //this.state = this.props.sth
    // console.log(this.props); //this will give undefined
    // console.log(props); //unless props has to be passed in as argument
  }

  componentDidMount() {
    //this is the best place to make AJAX or fetch Api calls to get data from server before rendering
    //then update state or sth eg this.setState({audios: something})
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
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
    //obly this method below copy multi-D array by value and not reference, others only work on simple array
    let counters = JSON.parse(JSON.stringify(this.state.counters));
    // counters[0].value++;
    // console.log(counters[0]);
    // console.log(this.state.counters[0].value);
    // return false;
    counters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - rendered");

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
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
