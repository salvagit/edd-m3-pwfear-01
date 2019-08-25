import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListElements from "../../routes/ListElements";
import Shop from "../../routes/Shop";

const App = () => (
  <Router>
    <Route exact path="/" render={() => <Link to={`/list`}>List</Link>} />
    <Route path="/list" component={ListElements} />
    <Route path="/cart" component={Shop} />
  </Router>
);

export default App;
