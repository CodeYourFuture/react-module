React Lesson 2
---
In this lesson we will be learning to use React components more effectively with deeper understanding of `Props` and `State`.

A React app is basically just a pile of big components (parents) that call smaller (child) components.

Props
---
React components are best understood in terms of parents and children.

Parent or `container` components may have access to the data that they need in order to pass on to multiple child components. These larger components often contain the actions (e.g. API calls) or data processing functions that their child components require and thus are referred to as `smart` components.

Example:
```jsx
import React, { Component } from 'react';
import Organisation from './Organisation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Organisation
            name="Refugee Support Network"
            website="http://www.refugeesupportnetwork.org"
        />
      </div>
    );
  }
}

export default App;

```

Child or `presentational` components are essentially smaller customisable to the data that they receive but usually do not have the data in themselves. These are often referred to as `dumb` components - because they do not process the data in themselves:

```jsx
import React, { Component } from 'react';

class Organisation extends Component {
  render() {
    const name = this.props.name;
    const website = this.props.website;
    return (
        <div>
            Name: {name} <br />
            Website: {website}
        </div>
    );
  }
}

export default Organisation;

```

- [Props exercise](https://jsfiddle.net/kabaros/1h9taf1e/)


JSX: Map Arrays to Components
---
When working with APIs we often have collections of things in `Arrays` which we want to map to components. This means we can loop through that data and display the customisable `dumb` component for each one.

```jsx

renderOrganisations() {
    const orgData = this.state.orgData;
    return orgData.map(function renderData(organisation) {
        return (
            <Organisation
                name= {organisation.name}
                borough={organisation.borough ? organisation.borough : 'None'}
                website= {organisation.website}
            />
        )
    });
}
class App extends Component {
  render() {
      return (
        <div className="App">
          {this.renderOrganisations()}
        </div>
      );
  }
}

```

State
---
Sometimes a component needs to react to data that doesn't come from a parent component. This is where the component's State comes in.

Props are a Compenent's configuration, they are received from above and they don't usually change by the component itself.
State starts with a default value (set in the constructor typically) then it gets changed (mutated) by events of the application (user interactions, form input, API calls etc..)


Example:
```jsx
import React, { Component } from 'react';
import Organisation from './Organisation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        website: null
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <Organisation
            name="Refugee Support Network"
            website={this.state.website}
        />
        <input type="text" value={this.state.website} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default App;

```

- [State Exercise](https://jsfiddle.net/kabaros/hLk531dj/)

Component Life Cycle
---
![First Render](/images/firstrender.png "Life Cycle Methods on the first render of a component")

Components have `life cycle` events which are methods that run code at particular times in the process. According to the time that the methods are called, some of them are often prefixed with `will` and `did`.

The diagram below shows the full picture of what happens during the rendering of a component. Even though you have all these methods available to use at your disposal, the only `required` method is `render()`.

![Component Lifecycle](/images/componentlifecycle.jpg "All lifecycle Methods of a React component")

Mounting
--
These are called when a component is being mounted on the DOM such as:

- Constructor()
- componentWillMount()
- render()
- etc

Updating
--
When there are changes to the props or state:

- componentWillReceiveProps()
- componentDidUpdate()
- render()
- etc

Unmonting
--
When a component is being removed from the DOM:

- componentWillUnmount()

Other APIs
--
These include `setState()` and `forceUpdate()`. You cannot access the state in some lifecycle methods, refer to the diagram above to find out which.

The complete list of these methods with their descriptions can be found in the documentation [here](https://facebook.github.io/react/docs/react-component.html).


API calls
---

In order to make an API called you can call the functions same

```jsx
callAPI = () => {
    const APIAddress = 'https://code-your-future.github.io/api-demo/area/All/index.json';
    fetch(APIAddress)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      this.setState({ orgData: jsonData });
    });
}

```

In order to use this function when the component first loads we will call it in the `componentDidMount()` lifecycle method.

```jsx
componentDidMount() {
    this.callAPI();
}
```

Once the state is updated with the data, your component will re-render.

Routing
---
React can be used as a `Single Page Application`, i.e. providing full experience of an application with many views within one page with several components.

However it is still possible to supporting `routing` by associating and displaying different components for different URLs.

Routing is usually achieved in React with a library such as `React Router`. You can find more information about this library with examples [here](https://github.com/ReactTraining/react-router).

HomeWork
---
This week, we will continue with building our app in React. As we get familiar with retrieving data and displaying it, we take our project into the next step.

We want to break the app into different pages which the users can navigate around (with the Back/Forward button or typing a url) without losing context.

The App will consist of three pages:

1. Home: displays a list of all areas (url: / )
2. Area: shows the organisations in a specific area (url: /area/{areaName} )
3. Organisation View: shows once specific organisation information (url: /organisations/{organisationName})


In order to implement this behaviour, we will use [React-Router](https://github.com/ReactTraining/react-router) library.

Bonus:
* Implement a fuzzy search functionality in the Area page where users can search by name or website etc..
* Use a library called underscore, find it online, read its documentation and npm install it. And use it!
