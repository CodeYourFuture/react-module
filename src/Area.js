import React, {Component} from 'react';
import './App.css';
import OrganisationList from './OrganisationList';
import NavBar from './Navbar';

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
       orgData: null,
       selectedArea: 'All',
       areas: []
    }
  }
  componentDidMount() {
    const routeArea = this.props.params.areaName;
    this.setState({
      area: routeArea
    });
    //this.getOrganisationsinArea();
    this.getAreas();
  }
  renderServiceProviders = (area) => {
      if (!this.state.orgData){
        //return error message if connection is not made
        //return <p>Data Not Displayed</p>;
        console.info('look, there was no data, I am going to make a API Call');
        this.getOrganisationsinArea(area);
      }
      let organisationList = this.state.orgData ? this.state.orgData.data : null;
    //returns the data in OrganisationComp
      if (organisationList) {
        return (
          <div>
            <OrganisationList orgData={organisationList}/>
          </div> 
        );
      }
  }
  getAreas = () => {
    console.info('js is so much fun');
    const getAreasURL = 'https://code-your-future.github.io/api-demo/area/index.json';
    fetch(getAreasURL)
    .then(function(response) {
      return response.json();
    })
    .then((jsonData)=> {
      this.setState({ areas: jsonData.data });
    });
  }
  getOrganisationsinArea = (targetArea) => {
  //  const targetArea = this.state.selectedArea;
   
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/' + targetArea + '/index.json';
    fetch(APIAddress)
    .then(function(response) {
      return response.json();
    })
    .then((jsonData)=> {
      this.setState({ orgData: jsonData });
    });

  }

	render() {
    const routeArea = this.props.params.areaName;
    // if someone goes to /area/west targetArea becomes west
    // otherwise it will fall back to 'All'
		const targetArea = routeArea ? routeArea : 'All';
		//console.log('selected area is: ' + routeArea);
    // to make a link use:
    // Area is: <a href={'/area/' + targetArea}>{targetArea}</a>
		if (this.state.selectedArea) {
      return (
        <div>
          <NavBar navItems={this.state.areas} />
          <h1>{targetArea}</h1>
    		  {this.renderServiceProviders(routeArea)}
  		  </div>
      );
    }
  }
}

export default Area;