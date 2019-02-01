import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header>
              <Link to="/">Home</Link>
              <Link to="/netflix">Netflix</Link>
            </header>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/netflix" component={Page1} />
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return(
    <h1>home</h1>
  )
};
const Page1 = () => {
  return(
    <h1>netflix</h1>
  )
};

export default App;
