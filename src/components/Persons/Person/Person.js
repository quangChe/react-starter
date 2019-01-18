import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js -- constructor()');
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('Person.js -- componentWillMount()');
  }

  componentDidMount() {
    console.log('Person.js -- componentDidMount()');
  }

  focus() {
    this.inputElement.current.focus();
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
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default WithClass(Person, classes.Person);