import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Template from "./components/Ui/template";
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Template} />    
        </Switch>
      </Router>
  );
}

export default App;


