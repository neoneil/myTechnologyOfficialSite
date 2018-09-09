import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Button } from 'react-bootstrap';
import './Home.css';
import Clock from './Mymoment';

class Home extends Component {
  render() {
    return (
      <Grid>

      <Clock mydeadline="2244"/>
        <Jumbotron>
        <h2>adding mytechnology details</h2>
        <p>The official website will be ready on Sep 14 2018</p>
        </Jumbotron>

      </Grid>
    );
  }
}

export default Home;
