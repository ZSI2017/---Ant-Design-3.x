import React, { Component } from 'react';
// import { Router, Route, Link, Switch } from 'react-router';
import {
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data:[]}
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}

      </div>
    );
  }
}

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)

const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
)

const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)

const Inbox = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Route path={`${match.url}/messages/:id`} component={Message}/>
  </div>
)

const routeTest = () =>{
  return (
  <BrowserRouter>
    <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
    </App>
  </BrowserRouter>)
}

  export default routeTest
