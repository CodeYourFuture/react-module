import React, {Component} from 'react';
import './App.css';

class OrgDetails extends Component {
  state = {
    orgData: []
  }
  render() {
		console.log(this.state)
		return (
      <div>
        Org is: {this.props.params.orgName}
        {this.findOrganisation()}
      </div>
      )
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

  findOrganisation = (organisations) => {
    if(this.state.orgData){
      const orgz = this.state.orgData.data;
      const org = orgz.filter(item => organisation === this.props.params.organisation)
      return(
          <div> {org}</div>
      )
  }
}
   componentDidMount() {
    this.callAPI();
  }
}

export default OrgDetails;