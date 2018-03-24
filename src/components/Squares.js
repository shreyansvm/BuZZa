import React, { Component } from 'react';
import '../App.css';

class Squares extends Component {
  render() {
    return(
    <div id="SquaresDisplay" className="container jumbotron">
      <h1>Interface Display</h1>
      <div id="Victim" className="squares">
        <p>Victim</p>
      </div>
      <div id="police" className="squares">
        <p>Police</p>
      </div>
      <div id="ems" className="squares">
        <p>EMS</p>
      </div>
    </div>
  );
  }
}

export default Squares
