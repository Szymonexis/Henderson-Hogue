import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainTable from "./components/MainTable/MainTable";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainTable />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
