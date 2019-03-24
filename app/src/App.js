import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './History/Home/Home';
import Introduction from './History/Introduction/Introduction';
import Step0 from './History/Step0/Step0';
import Step1 from './History/Step1/Step1';
import Step2a from './History/Step2/Step2a';
import Step2b from './History/Step2/Step2b';
import Step3a from './History/Step3/Step3a';
import Step3b from './History/Step3/Step3b';
import Step4 from './History/Step4/Step4';
import Step5a from './History/Step5/Step5a';
import Step5b from './History/Step5/Step5b';
import Step6 from './History/Step6/Step6';
import Step7a from './History/Step7/Step7a';
import Step7b from './History/Step7/Step7b';
import Step8a from './History/Step8/Step8a';
import Step8b from './History/Step8/Step8b';
import Step9 from './History/Step9/Step9';
import Step10a from './History/Step10/Step10a';
import Step10b from './History/Step10/Step10b';
import Step11a from './History/Step11/Step11a';
import Step11b from './History/Step11/Step11b';
import Step12 from './History/Step12/Step12';
import Step13a from './History/Step13/Step13a';
import Step13b from './History/Step13/Step13b';
import Step14 from './History/Step14/Step14';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="ocean" />
            <Route exact path="/" component={Home} />
            <Route exact path="/Introduction" component={Introduction} />
            <Route exact path="/Step0" component={Step0} />
            <Route exact path="/Step1" component={Step1} />
            <Route exact path="/Step2a" component={Step2a} />
            <Route exact path="/Step2b" component={Step2b} />
            <Route exact path="/Step3a" component={Step3a} />
            <Route exact path="/Step3b" component={Step3b} />
            <Route exact path="/Step4" component={Step4} />
            <Route exact path="/Step5a" component={Step5a} />
            <Route exact path="/Step5b" component={Step5b} />
            <Route exact path="/Step6" component={Step6} />
            <Route exact path="/Step7a" component={Step7a} />
            <Route exact path="/Step7b" component={Step7b} />
            <Route exact path="/Step8a" component={Step8a} />
            <Route exact path="/Step8b" component={Step8b} />
            <Route exact path="/Step9" component={Step9} />
            <Route exact path="/Step10a" component={Step10a} />
            <Route exact path="/Step10b" component={Step10b} />
            <Route exact path="/Step11a" component={Step11a} />
            <Route exact path="/Step11b" component={Step11b} />
            <Route exact path="/Step12" component={Step12} />
            <Route exact path="/Step13a" component={Step13a} />
            <Route exact path="/Step13b" component={Step13b} />
            <Route exact path="/Step14" component={Step14} />
        
        
    
            </div>
            <div className="bubbles">
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
              <span/>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
