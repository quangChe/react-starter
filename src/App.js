import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  counter = 0;
  allPeople = [
    {name: 'Sam', age: 28, stat: 'I do not mind tiramisu!'},
    {name: 'Ryan', age: 24, stat: 'I hates tiramisu!'},
    {name: 'Jordan', age: 24, stat: 'I hates tiramisu!'},
    {name: 'Robert', age: 28, stat: 'I hates tiramisu!'},
    {name: 'Quang', age: 26, stat: 'I hates tiramisu!'},
  ]

  state = this.allPeople[this.counter];

  

  switchPerson = () => {
    this.counter ++;
    this.counter = (this.counter > 4) ? 0 : this.counter;
    this.setState(this.allPeople[this.counter]);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <h2>Who are you?</h2>
        {/* <button onClick={this.switchPerson}>Switch Person</button> */}
        <Person 
          name={this.state.name} 
          age={this.state.age}
          click={this.switchPerson}>{this.state.stat}</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Quang!!'));
  }
}

export default App;
