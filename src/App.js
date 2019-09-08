import React from "react";
import Deck from "./Deck";

import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Liked from "./components/Liked";

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Deck} />
            <Route path="/liked" exact component={Liked} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;