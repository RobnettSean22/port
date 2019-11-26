import React, { Component } from "react";
import Landing from "./Compnents/Landing/Landing";
import About from "./Compnents/About/About";
import Portfolio from "./Compnents/Portfolio/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Landing />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
