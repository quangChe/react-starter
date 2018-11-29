import React from 'react';
// import Radium from 'radium'; 
import classes from './Person.css';

const person = (props) => {
  // const style = {
  //   '@media (min-width: 200px)': {
  //     width: '100px'
  //   }
  // };
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p>I'm {props.name}, a {props.age} year-old boy.</p>
      {props.children}
      <input 
        className="input" 
        type="text" 
        onChange={props.input} value={props.name}/>
      <button 
        className="button"
        onClick={props.click}>Next Person</button>
    </div>
  );
}

export default person;
// export default Radium(person);