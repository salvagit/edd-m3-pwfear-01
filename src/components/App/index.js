import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "../../Routes/List";

const App = () => (
  <Router>
    <Route path="/" exact render={() => "hola root"} />
    <Route path="/list" component={List} />
  </Router>
);

export default App;
