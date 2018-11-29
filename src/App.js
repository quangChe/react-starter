import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
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
    const c = classes['toggle-btn1'];
    const toggleBtn = document.getElementsByClassName(c);
    toggleBtn.textContent = msg;
    this.setState({showPeople: doesShow});
  }

  viewAllNames = () => {
    const doesShow = !this.state.showNames;
    const msg = (doesShow) ? 'Hide Names' : 'Show Names';
    const c = classes['toggle-btn2'];
    const toggleBtn = document.getElementsByClassName(c);
    toggleBtn.textContent = msg; 
    this.updateNames();
    this.setState({showNames: doesShow})
  }

  render() {
    let peopleBlock;
    let namesList;
    let preventButton = '';
    let preventNotice = classes['default'];
    
    if (this.state.showPeople) {
      peopleBlock = (
        <div>
          <button 
            className={classes['btn-two']}
            onClick={this.removeName.bind(this, 'a random noob')}>Replace Employee</button>
          <Person 
            name={this.state.person.name} 
            age={this.state.person.age}
            click={this.switchPerson}
            input={this.nameChange}><p>{this.state.person.stat}</p></Person>
        </div>         
      );

      // styles.btnOne.color = 'red';
      // styles.btnOne.border = '1px solid red';
      // styles.btnOne[':hover'] = {
      //   color: 'white',
      //   backgroundColor: 'red'
      // };
    } 

    if (this.state.showNames) {

      if(this.allPeople.length <= 1) {
        preventButton = classes['firing-prevent'];
        preventNotice = classes['firing-notice'];
      }
      
      namesList = (
        <div className="names-list">
          <h2>Developers on Payroll:</h2>
          <p className={preventNotice}>You can't fire your last employee!</p>
          {this.state.names.map((person, index) => {
            return (
              <div key={person.id}>
                <li>{person.name}</li>
                <button 
                  className={preventButton}
                  onClick={() => this.firePerson(index)}>Fire</button>
              </div>
            )
          })}
        </div>
      )

      // styles.btnOne.backgroundColor = 'red';
    }


    return (
      // <StyleRoot>
        <div className={classes.App}>
          <button 
            className={classes['btn-one'] + ' ' + classes['toggle-btn1']}
            onClick={this.togglePersonHandler}>Show People</button>
          <button 
            className={classes['btn-one'] + ' ' + classes['toggle-btn2']}
            onClick={this.viewAllNames}>List Names</button>
          {peopleBlock}
          {namesList}
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello Quang!!'));
  }
}

export default App;
// export default Radium(App);
