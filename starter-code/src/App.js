import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {
  render() {
    const list = foods.map( (food, i) => (
      <div key={i}>
        <FoodBox food={food} />
      </div>
    ))
    
    return (
      <div className="container">
        <h1 className="title is-flex">Iron-Nutrition</h1>
        <div className="columns">
          <div className="column">
            {list}
          </div>
        </div>    
      </div>
    );
  }
}

export default App;
