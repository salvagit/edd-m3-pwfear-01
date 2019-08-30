import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "../../Routes/List";
import Cart from "../../Routes/Cart";

const App = () => (
  <Router>
    <Route path="/" exact render={() => "hola root"} />
    <Route path="/list" component={List} />
    <Route path="/cart" component={Cart} />
  </Router>
);

export default App;
