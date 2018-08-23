import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { toJS, observable } from "mobx";
import axios from "axios";
@inject("teststore", "store2th")
@observer
class App extends Component {
  state = {
    dataLoader: ["1", "2"]
  };
  handleInput = e => {
    this.props.teststore.setSearchText(e.target.value);
  };
  handleEnter = () => {
    this.props.teststore.enterValue(10);
  };
  handleTest = () => {
    this.props.store2th.changeValue();
  };
  handleFetchData = () => {
    this.props.store2th.fetchData();
  };
  handleLoadData = () => {
    console.log(toJS(this.props.store2th.data));
    console.log(toJS(this.props.store2th.dataload));
    this.setState({ dataLoader: toJS(this.props.store2th.dataload) });
  };

  async componentDidMount() {
    await this.props.store2th.fetchData;
    await console.log(toJS(this.props.store2th.dataload))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.teststore.searchText}</h1>
          <h2>{this.props.teststore.pushValue}</h2>
        </header>
        <input
          value={this.props.teststore.searchText}
          onChange={this.handleInput}
        />
        <button onClick={this.handleEnter}>enter</button>
        <div>
          <h2>{this.props.store2th.value} </h2>
          <button onClick={this.handleTest}>click</button>
          <button onClick={this.handleFetchData}>fetchData</button>
          <button onClick={this.handleLoadData}>loadData</button>
          <div>{this.state.dataLoader} </div>
        </div>
      </div>
    );
  }
}

export default App;
