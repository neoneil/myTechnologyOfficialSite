import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import MyCalendar from './components/Calendar';
import timeslot from './components/timeslot';
import mymoment from './components/Mymoment';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path = "/" component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/portfolio" component = {Portfolio} />
          <Route path = "/signup" component = {Signup} />
          <Route path = "/login" component = {Login} />
          <Route path = "/calendar" component = {MyCalendar} />
          <Route path = "/timeslot" component = {timeslot} />
          <Route path = "/mymoment" component = {mymoment} />
        </div>
      </Router>
    );
  }
}

export default App;
