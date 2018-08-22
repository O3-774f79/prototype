import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("teststore")
@observer
class App extends Component {
  sendStore = () => {
    this.props.teststore.testWord = "2";
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.teststore.testWord}</h1>
        </header>
        <button onClick={this.props.teststore.resetTest}>test</button>
      </div>
    );
  }
}

export default App;
