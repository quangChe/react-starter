import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Persons.js -- constructor()');
    this.personComponent = React.createRef();
  }

  componentWillMount() {
    console.log('Persons.js -- componentWillMount()');
  }

  componentDidMount() {
    console.log('Persons.js -- componentDidMount()');
    this.personComponent.current.focus();
  }

  componentWillUnmount() {
    console.log('Persons.js -- componentWillUnmount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons.js -- componentWillReceiveProps()', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons.js -- shouldComponentUpdate()', nextProps, nextState, this.props.persons);
  //   return nextProps !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Persons.js -- componentWillUpdate()', nextProps, nextState, this.props.persons);
  }

  componentDidUpdate() {
    console.log('Persons.js -- componentDidUpdate()');
  }

  render = () => {
    console.log('Persons.js -- render()')
    return this.props.persons.map((person, index) => 
        <Person
        key={person.id}
        click={() => this.props.clicked( index )}
        name={person.name}
        position={index}
        ref={this.personComponent}
        age={person.age}
        changed={( event ) => this.props.changed( event, person.id )} />
    )
   }
}

export default Persons;