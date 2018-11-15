import React from 'react'; 
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>I'm {props.name}, a {props.age} year-old boy.</p>
      <p>{props.children}</p>
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