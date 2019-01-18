import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js -- constructor()');
  }

  componentWillMount() {
    console.log('Person.js -- componentWillMount()');
  }

  componentDidMount() {
    console.log('Person.js -- componentDidMount()');
  }

  componentWillUnmount() {
    console.log('Person.js -- componentWillUnmount()');
  }


  render = () => {
    console.log('Person.js -- render()')

    return (
      <>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </>
    )
  }
}

export default WithClass(Person, classes.Person);