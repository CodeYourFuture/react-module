import React, { Component } from 'react';
import './App.css';
import Area from './area';
import OrgType from './orgtype';
import Clients from './clients';
import Details from './details';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
				main: ['area','type','clients'],
				clickedValue: null,
				callData: null,
		}
	}
	clients = (clients) => {
		let clicked = 'details';
		let clientsData = 'clients/' + clients;
		//call api
		this.callAPI(clientsData,clicked);
	}
	orgtype = (type) => {
		let clicked = 'details';
		let typeData = 'type/' + type;
		this.callAPI(typeData,clicked);
	}
	areas = (area) => {
		let clicked = 'details';
		let areaData = 'area/' + area;
		this.callAPI(areaData,clicked);
	}
	servicesBy = (info) =>{
		this.callAPI(info,info);
	}
	displayRender = () => {
		const data = this.state.callData.data;
		switch (this.state.clickedValue) {
			case 'clients': return (<Clients dataInfo={this.state.callData} whenClick={this.clients} />);
			break;
			case 'type': return (<OrgType dataInfo={this.state.callData} whenClick={this.orgtype} />);
			case 'area': return (<Area dataInfo={this.state.callData} whenClick={this.areas} />);
			case 'details': {
				return data.map((data, index) => {return (
					<Details 
					key={index}
					website={data.website}
					email={data['email\r']}
					tel={data.tel}
					area={data.area}
					process={data.process}
					clients={data.clients}
					services={data.services}
					borough={data.borough}
					type={data.type}
					day={data.day}
					organisation={data.organisation}/>);})
			}
			default:
			break;
		}
	}
	callAPI = (url,clicked) => {
		const APIAddress = 'https://code-your-future.github.io/api-demo/' + url + '/index.json';
		fetch(APIAddress)
		.then(function(response) {
			return response.json();
		})
		.then((jsonData) => {
			this.setState({ callData: jsonData, clickedValue: clicked });
		});
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Services in London</h2>
				</div>
				<div>
					<div className="nav">
						<p>Services By</p>
						{this.state.main.map( (info, index) => {return (<button key={index} className="infoBtn" onClick={() => this.servicesBy(info)}>{info}</button>);})}
					</div>
					<div>
						{this.state.callData ? this.displayRender() : 'choose one'}
					</div>
				</div>
			</div>
		);
	}
}

export default App;

/*class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
				display: null
		}
	}
	organization() {
		this.setState({
			display: <Organization />
		})
	}
	areas() {
		this.setState({
			display: <Area />
		})
	}
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Services in London</h2>
				</div>
				<div>
					<button className="infoBtn" onClick={this.organization.bind(this)}>Organization</button>
					<button className="infoBtn" onClick={this.areas.bind(this)}>Areas</button>
					{this.state.display}
				</div>
			</div>
		);
	}
}

export default App;*/
