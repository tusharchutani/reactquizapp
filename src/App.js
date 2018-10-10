import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './views/welcome';
import Results from './views/results';
import Quiz  from './views/quiz';
import PageNotFound from './views/pageNotFound';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './App.css';
import { Header } from './components/header';


class App extends Component {

  render() {
    //route * is the default router
    return (
      <Router>
        <div className="appContainer">
          <Header title="Welcome to the trivia challenge - Tushar Chutani"/>
          <div className="appViewContainer">
            <Card id="appContents" className="card">
              <CardContent id="appContentCard">
                <Switch>
                  <Route exact path="/" component={Welcome}/>
                  <Route path="/results" component={Results}/>
                  <Route path="/quiz" component={Quiz}/>
                  <Route from='*' component={PageNotFound}/>
                </Switch>
              </CardContent>
            </Card>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
