import React, {Component} from 'react';
import './App.css';

class OrgDetails extends Component {

  render() {
		console.log(this.state)
		return <p>Org is: {this.props.params.orgName}</p>
}
 callAPI = () => {
  const area = this.props.params.areaName;
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/'+ area +'/index.json';
    fetch(APIAddress)
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

export default OrgDetails;