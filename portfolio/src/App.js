import React, { Component } from "react";
import Landing from "./Compnents/Landing/Landing";
import About from "./Compnents/About/About";
import Portfolio from "./Compnents/Portfolio/Portfolio";
import Resume from "./Compnents/Resume/Resume";
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
        <Resume />
      </div>
    );
  }
}

export default App;
