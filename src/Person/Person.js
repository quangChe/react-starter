import React from 'react';
import Radium from 'radium'; 
import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 200px)': {
      width: '100px'
    }
  };
  return (
    <div className="Person" style={style}>
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

export default Radium(person);