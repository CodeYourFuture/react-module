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
  onChangeNewName = (event) => {
    const value = event.target.value;
    this.setState({newName:value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RAMS</h2>
        </div>
        <div className="App-intro">
        <input type='text' onChange={this.onChangeNew}></input>
        <button onClick={this.addOrganisation}> add something </button>
        // {this.renderServiceProviders()} 
        //  Todo :o)
        </div>
      </div>
    );
  }
  onChangeNew(){
    console.log('hello');
  }

  addOrganisation = event => {
    const organisations =this.state.orgData;
    console.log(this.state.newName);
    console.log(organisations.data[0]);
    
    if(organisations.data.length){
      organisations.data.push({
        organisaion: this.state.newName
       // tel: 123 456
      });
      this.setState({orgData: organisations});
    }
  }

  callAPI = () => {
    const GetAreaURL = 'https://code-your-future.github.io/api-demo/area/All/index.json';
    fetch(GetAreaURL)
    .then(function(response) {
      return response.json();
    })
    .then((jsonData)=> {
      this.setState({ orgData: jsonData });
    });
  }

  componentDidMount() {
    this.callAPI();
  }
}

export default App;