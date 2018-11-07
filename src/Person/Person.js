import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name}, a {props.age} year-old boy.</p>
      <p>{props.children}</p>
      <button onClick={props.click}>Switch Person</button>
    </div>
  );
}

export default person;