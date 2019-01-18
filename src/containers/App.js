import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('App.js -- constructor()');
  }

  componentWillMount() {
    console.log('App.js -- componentWillMount()');
  }

  componentDidMount() {
    console.log('App.js -- componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('App.js -- shouldComponentUpdate()', nextProps, nextState, this.persons);
  //   return nextState.persons !== this.state.persons || 
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('App.js -- componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('App.js -- componentDidUpdate()');
  }


  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('App.js -- render()');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
        <Cockpit
          containerInput={this.props.testing}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
