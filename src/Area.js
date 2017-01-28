import React, {Component} from 'react';
import './App.css';

class Area extends Component {

  callAPI = () => {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/All/index.json';
    fetch(APIAddress)
    .then(function(response) {
      return response.json();
    })
    .then((jsonData)=> {
      this.setState({ orgData: jsonData });
    });
  }

	render() {
		const targetArea = 'All';
		console.log(this.props)
		return <p>
		  Area is: {this.props.params.areaName}
		  <a href={'/area/' + targetArea}>
		    Go somewhere!
		  </a>
		</p>
}
}

export default Area;