import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListElements from "../ListElements";

const App = () => (
  <Router>
    <Route exact path="/" render={() => <Link to={`/list`}>List</Link>} />
    <Route path="/list" component={ListElements} />
  </Router>
);

export default App;
