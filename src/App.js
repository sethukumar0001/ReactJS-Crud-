import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddData from "./components/addData";
import ShowList from './components/showList';
import {Provider} from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
      <Router>
         <Provider store={store}>
        <div>
          <ShowList />
          <AddData />
        </div>
      </Provider>
      </Router>
  );
}

export default App;


