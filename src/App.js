import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  counter = 0;
  allPeople = [
    {id: 1, name: 'Sam', age: 28, stat: 'I do not mind tiramisu!'},
    {id: 2, name: 'Ryan', age: 24, stat: 'I hates tiramisu!'},
    {id: 3, name: 'Jordan', age: 24, stat: 'I hates tiramisu!'},
    {id: 4, name: 'Robert', age: 28, stat: 'I hates tiramisu!'},
    {id: 5, name: 'Quang', age: 26, stat: 'I hates tiramisu!'},
  ];
  state = {
    person: this.allPeople[this.counter],
    showPeople: false,
    names: [],
    showNames: false
  };

  updateNames = () => {
    const allNames = this.allPeople.reduce((all, person) => {
      all.push({id: person.id, name: person.name});
      return all;
    }, []);
    this.setState({names: allNames});
  }

  removeName = (name) => {
    const person = this.allPeople[this.counter];
    person.name = name;
    this.updateNames();
    this.setState({person: person});
  }

  firePerson = (i) => {
    if (this.allPeople.length === 1) return alert('You cannot fire everyone!');
    this.allPeople.splice(i, 1);
    this.updateNames();
    this.setState({person: this.allPeople[this.counter]});
    this.counter = 0;
  }

  switchPerson = () => {
    this.counter ++;
    this.counter = this.counter === this.allPeople.length ? 0 : this.counter;
    const newPerson = {person: this.allPeople[this.counter]}
    this.setState(newPerson);
  }

  nameChange = (event) => {
    const person = this.allPeople[this.counter];
    person.name = event.target.value;
    this.updateNames();
    this.setState({person: person});
  }

  togglePersonHandler = () => {
    const doesShow = !this.state.showPeople;
    const msg = (doesShow) ? 'Hide Devs' : 'Show Devs';
    const toggleBtn = document.getElementsByClassName('toggle-btn1')[0];
    toggleBtn.textContent = msg;
    this.setState({showPeople: doesShow});
  }

  viewAllNames = () => {
    const doesShow = !this.state.showNames;
    const msg = (doesShow) ? 'Hide Names' : 'Show Names';
    const toggleBtn = document.getElementsByClassName('toggle-btn2')[0];
    toggleBtn.textContent = msg; 
    this.updateNames();
    this.setState({showNames: doesShow})
  }

  render() {
    const styles = {
      btnOneA: {
        backgroundColor: 'green',
        border: 'none',
        font: 'inherit',
        padding: '8px',
        color: 'white',
        marginRight: '20px'
      },
      btnOneB: {
        backgroundColor: 'green',
        border: 'none',
        font: 'inherit',
        padding: '8px',
        color: 'white',
        marginLeft: '20px'
      },
      btnTwo: {
        marginTop: '5vh',
        backgroundColor: 'white',
        font: 'inherit',
        border: 'none',
        padding: '8px',
        color: 'red',
        textDecoration: 'underline'
      }
    };

    let peopleBlock;
    let namesList;
    let preventButton = '';
    let preventNotice = 'default';
    
    if (this.state.showPeople) {
      peopleBlock = (
        <div>
          <button 
            style={styles.btnTwo}
            onClick={this.removeName.bind(this, 'a random noob')}>Replace Employee</button>
          <Person 
            name={this.state.person.name} 
            age={this.state.person.age}
            click={this.switchPerson}
            input={this.nameChange}><p>{this.state.person.stat}</p></Person>
        </div> 
      );

      styles.btnOneA.backgroundColor = 'red';
    } 

    if (this.state.showNames) {

      if(this.allPeople.length <= 1) {
        preventButton = 'firing-prevent';
        preventNotice = 'firing-notice';
      }
      
      namesList = (
        <div className="names-list">
          <h2>Developers on Payroll:</h2>
          {this.state.names.map((person, index) => {
            return (
              <div key={person.id}>
                <li>{person.name}</li>
                <button 
                  className={preventButton}
                  onClick={() => this.firePerson(index)}>Fire</button>
                <p className={preventNotice}>You can't fire your last employee!</p>
              </div>
            )
          })}
        </div>
      )

      styles.btnOneB.backgroundColor = 'red';
    }


    return (
      <div className="App">
        <button 
          className="toggle-btn1"
          style={styles.btnOneA}
          onClick={this.togglePersonHandler}>Show Devs</button>
        <button 
          className="toggle-btn2"
          style={styles.btnOneB}
          onClick={this.viewAllNames}>List Names</button>
        {peopleBlock}
        {namesList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Quang!!'));
  }
}

export default App;
