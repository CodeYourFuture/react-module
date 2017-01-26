import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Organisation from './Organisation';


class App extends Component {
  //this is our own function that we can call using this.functionName
  // changeAddress = () => {
  //   this.setState({
  //   address: 'new address'
  //   })
  // }
  // constructor gets called once when the class is initiated
  constructor(props) {
    super(props);
    this.state = {
    orgData: {data: []}
    };

  {/*   handleChange(event) {
    this.setState({value: event.target.value});
  }*/}
  }
  renderOrganisations = () => {
    const myData = this.state.orgData.data; 
     return myData.map(function(organisation) {
      return ( <Organisation
     website={organisation.website}
     tel={organisation.tel ? organisation.tel : 'None'}
     area={organisation.area}
     process={organisation.process}
     name={organisation.organisation}
     clients={organisation.clients}
     services={organisation.services}
     borough={organisation.borough}
     type={organisation.type}
     day={organisation.day}
     />);
   });
     
   }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <p className="App-head">Services In London</p>
        </div>
           <p className="App-intro"></p>

           {this.renderOrganisations()}
    {  /*    <input type="text" value={this.state.website} onChange={this.handleChange.bind(this)} />*/}
         <button>Clear</button>
      </div>
   );            
}
  callAPI = () => {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/North/index.json';
    fetch(APIAddress)
    .then(function(response) {
    console.log(response) 
    return response.json();
    })
    .then((jsonData) => {
      this.setState({ orgData: jsonData });
  });

  }
 componentDidMount() {
    this.callAPI();

    
  }
}

export default App;
