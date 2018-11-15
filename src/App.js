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
  ];
  state = {
    people: this.allPeople[this.counter],
    showPeople: false
  };

  switchName = (name) => {
    const person = this.allPeople[this.counter];
    person.name = name;
    this.setState(person);
  }

  switchPerson = () => {
    this.counter ++;
    this.counter = (this.counter > 4) ? 0 : this.counter;
    const newPerson = {
      people: this.allPeople[this.counter]
    }
    this.setState(newPerson);
  }

  nameChange = (event) => {
    const person = this.allPeople[this.counter];
    person.name = event.target.value;
    this.setState(person);
  }

  togglePersonHandler = () => {
    const doesShow = !this.state.showPeople;
    const msg = (doesShow) ? 'Hide People' : 'Show People';
    const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
    toggleBtn.textContent = msg;
    this.setState({showPeople: doesShow});
  }

  render() {
    const styles = {
      btnOne: {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid green',
        padding: '8px',
        color: 'green'
      },
      btnTwo: {
        marginTop: '20vh',
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid red',
        padding: '8px',
        color: 'red'
      }
    };

    let peopleBlock;
    
    if (this.state.showPeople) {
      peopleBlock = (
        <div>
          <button 
            style={styles.btnTwo}
            onClick={this.switchName.bind(this, 'Blank')}>Remove This Person</button>
          <Person 
            name={this.state.people.name} 
            age={this.state.people.age}
            click={this.switchPerson}
            input={this.nameChange}><p>{this.state.people.stat}</p></Person>
        </div> 
      );
    }

    return (
      <div className="App">
        <button 
          className="toggle-btn"
          style={styles.btnOne}
          onClick={this.togglePersonHandler}>Show People</button>
        {peopleBlock}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Quang!!'));
  }
}

export default App;
