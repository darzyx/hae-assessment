import React, { Component } from "react";

class App extends Component {
  async getCandidates() {
    try {
      const response = await fetch("/candidates/");
      const candidates = await response.json();
      console.log("Received candidates:", candidates);
    } catch (e) {
      console.error("API request raised an error:", e);
    }
  }

  componentDidMount() {
    this.getCandidates();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default App;
