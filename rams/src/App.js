import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import response from './data';

class App extends Component {
  renderClients = () => {
    let clientsList = [], i=0;
    for(i = 0; i < response.data.length; i ++) {
      clientsList.push(<p className ="list">{response.data[i]}</p>);
    }
    return clientsList;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RAMS</h2>
        </div>
        <p className="App-intro">
          {this.renderClients()}
        </p>
      </div>
    );
  }
}

export default App;


