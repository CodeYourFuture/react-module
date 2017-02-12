import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    //set intial state of your component
  constructor(props) {
    super(props);
    this.state = {
       orgData: null
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RAMS</h2>
        </div>
        <div className="App-intro">
          /* {this.renderServiceProviders()} */
          Todo :o)
        </div>
      </div>
    );
  }

  // callAPI = () => {
  //   const GetAreaURL = 'https://code-your-future.github.io/api-demo/area/All/index.json';
  //   fetch(GetAreaURL)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then((jsonData)=> {
  //     this.setState({ orgData: jsonData });
  //   });
  // }

  componentDidMount() {
    // this.callAPI();
  }
}

export default App;