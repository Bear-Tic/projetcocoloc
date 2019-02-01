import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Introduction from './History/Introduction/Introduction';
import PauseManger from './History/PauseManger/PauseManger';
import Combat1 from './History/Combat1/Combat1';
import Combat2 from './History/Combat2/Combat2';
import Combat3 from './History/Combat3/Combat3';
import Combat4 from './History/Combat4/Combat4';
import Combat5 from './History/Combat5/Combat5';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
          <div class="ocean">
            <header>
              <Link to="/">Home</Link>
            </header>
          </div>
          <Route path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/pause" component={PauseManger} />
          <Route exact path="/fight1" component={Combat1} />
          <Route exact path="/fight2" component={Combat2} />
          <Route exact path="/fight3" component={Combat3} />
          <Route exact path="/fight4" component={Combat4} />
          <Route exact path="/fight5" component={Combat5} />
        </div>
        <div class="bubbles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
      </Router>
    );
  }
}

const Home = () => {
  return(
    <Fragment />
  )
};

export default App;
