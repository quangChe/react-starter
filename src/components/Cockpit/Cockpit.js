import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if ( props.persons.length <= 2 ) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.persons.length <= 1 ) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
    <Aux>
      <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <h2>{props.containerInput}</h2>
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button
          className={btnClass}
          onClick={props.click}>Toggle Persons</button>
        <button onClick={props.login}>Log In</button>
      </div>
    </Aux>
  );
};

export default cockpit;
