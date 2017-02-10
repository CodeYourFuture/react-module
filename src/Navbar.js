import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       navItems: []
    }
  }
  renderNavItems = () => {
    const navItems = this.props.navItems;
    return navItems.map(function renderAreas(area, index){
      return (
        <div key={index} className='displayAreas'>
          <a href={'/area/' + area}>{area}</a>
        </div>
      )
    });
  }
  render() {
    console.info('here i am');
    return (
      <div className='navbar'>{this.renderNavItems()}</div>
    );
  }
}
export default NavBar;


