import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Login from './Login';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Register from "./Register";




function App() {
  return (

    // BEM
    <Router>
    <div className="app">
      
        <Header />

        <Switch>
          <Route path="/Search">
            <SearchPage />
          </Route>
          <Route exact strict path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
        <Footer />
      
    </div>
    </ Router>
  );
}

export default App;