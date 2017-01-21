React Lesson 3
---

Recap
---
* ES6
 * Class
 * extends
 * constructor
 * modules (import/export)
 * arrow functions
 * this
 * others: const/let

* React
  * create-react-app magic
  * Dumb and Smart Components (props and state)
  * Lifecycle
  * JSX
   * React component always capitalised
   * embedding code
   * mapping arrays

Routing
----
React can be used as a `Single Page Application`, i.e. providing full experience of an application with many views within one page with several components.

However it is still possible to support `routing` by associating and displaying different components for different URLs.

Routing is usually achieved in React with a library such as `React Router`. You can find more information about this library with examples [here](https://github.com/ReactTraining/react-router).

Unit Testing
---
Why do we do need it?
Levels of testing - End to End, Integration, Unit


HomeWork
----
Continue building last week's app. As we get familiar with retrieving data and displaying it, we take our project into the next step.

We want to break the app into different pages which the users can navigate around (with the Back/Forward button or typing a url) without losing context.

The App will consist of three pages:

1. Home: displays a list of all areas (url: / )
2. Area: shows the organisations in a specific area (url: /area/{areaName} )
3. Organisation View: shows once specific organisation information (url: /organisations/{organisationName})


In order to implement this behaviour, we will use [React-Router](https://github.com/ReactTraining/react-router) library.

Bonus:
* Implement a fuzzy search functionality in the Area page where users can search by name or website etc..
* Use a library called underscore, find it online, read its documentation and npm install it. And use it!

