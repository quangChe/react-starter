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
    person: this.allPeople[this.counter],
    showPeople: false,
    names: [],
    showNames: false
  };

  removeName = (name) => {
    const person = this.allPeople[this.counter];
    person.name = name;
    const allNames = this.allPeople.reduce((all, person) => {
      all.push(person.name);
      return all;
    }, []);
    this.setState({person: person, names: allNames});
  }

  switchPerson = () => {
    this.counter ++;
    this.counter = (this.counter > 4) ? 0 : this.counter;
    const newPerson = {
      person: this.allPeople[this.counter]
    }
    this.setState(newPerson);
  }

  nameChange = (event) => {
    const person = this.allPeople[this.counter];
    person.name = event.target.value;
    const allNames = this.allPeople.reduce((all, person) => {
      all.push(person.name);
      return all;
    }, []);
    this.setState({person: person, names: allNames});
  }

  togglePersonHandler = () => {
    const doesShow = !this.state.showPeople;
    const msg = (doesShow) ? 'Hide People' : 'Show People';
    const toggleBtn = document.getElementsByClassName('toggle-btn1')[0];
    toggleBtn.textContent = msg;
    this.setState({showPeople: doesShow});
  }

  viewAllNames = () => {
    const doesShow = !this.state.showNames;
    const msg = (doesShow) ? 'Hide Names' : 'Show Names';
    const toggleBtn = document.getElementsByClassName('toggle-btn2')[0];
    toggleBtn.textContent = msg; 
    const allNames = this.allPeople.reduce((all, person) => {
      all.push(person.name);
      return all;
    }, []);
    this.setState({names: allNames, showNames: doesShow})
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
    let namesList;
    
    if (this.state.showPeople) {
      peopleBlock = (
        <div>
          <button 
            style={styles.btnTwo}
            onClick={this.removeName.bind(this, 'Blank')}>Remove This Person</button>
          <Person 
            name={this.state.person.name} 
            age={this.state.person.age}
            click={this.switchPerson}
            input={this.nameChange}><p>{this.state.person.stat}</p></Person>
        </div> 
      );
    } 

    if (this.state.showNames) {
      namesList = (
        <div className="names-list">
          <h2>All people currently:</h2>
          {this.state.names.map(name => {
            return <li>{name}</li>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <button 
          className="toggle-btn1"
          style={styles.btnOne}
          onClick={this.togglePersonHandler}>Show People</button>
        <button 
          className="toggle-btn2"
          style={styles.btnOne}
          onClick={this.viewAllNames}>List Names</button>
        {peopleBlock}
        {namesList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Quang!!'));
  }
}

export default App;
