import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import Search from './pages/Search';


import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Router>
          <Route exact path="/shoppinglist" component={ShoppingList}/>
          <Route exact path="/" component={Search}/>
          </Router>
        </div>
      </Provider>
    )
  };
}

export default App;
