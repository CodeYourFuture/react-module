import React, { Component } from 'react';
import './App.css';
import Area from './area';
import Type from './type';
import Clients from './clients';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
				main: ['area','type','clients'],
				clickedValue: null,
				callData: null,
		}
	}
	servicesBy = (info) =>{
		this.setState({clickedValue: info});
		this.componentDidMount(info);
	}
	displayRender = () => {
		switch (this.state.clickedValue) {
			case 'clients': return (<Clients dataInfo={this.state.callData} />);
			break;
			case 'type': return (<Type dataInfo={this.state.callData} />);
			case 'area': return (<Area dataInfo={this.state.callData} />);
			default:
			break;
		}
		/*let test = '';
		for (var key in this.state.data.data) {
			for (var j in this.state.data.data[key]) {
				test += this.state.data.data[key][j]
			}
		}
		return <div>{test}</div>;*/
	}
	callAPI = (url) => {
		const APIAddress = 'https://code-your-future.github.io/api-demo/' + url + '/index.json';
		fetch(APIAddress)
		.then(function(response) {
			return response.json();
		})
		.then((jsonData) => {
			this.setState({ callData: jsonData });
		});
	}
	componentDidMount(url) {
		this.callAPI(url);
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
