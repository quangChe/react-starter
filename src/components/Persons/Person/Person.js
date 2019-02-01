import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';
import IrisAPI from 'iris-sdk/services';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js -- constructor()');
    this.inputElement = React.createRef();
    IrisAPI.dev.crud.listAll('events')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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

  testing123() {
    const sandboxAuth = IrisAPI.sandbox.auth;
    const sandboxApi = IrisAPI.sandbox.crud;

    sandboxAuth.login({email: 'qche@irislocal.com', password: 'Password123'}).then(data => console.log(data)).catch(err => console.error(err))
  }


  render = () => {
    console.log('Person.js -- render()')

    return (
      <>
        <AuthContext.Consumer>
          {auth=> auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>

        <button onClick={() => this.testing123()}>TEST ME!</button>

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