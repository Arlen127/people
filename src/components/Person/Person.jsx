import React from 'react'
import './Person.css'
import avatar from './avatar.png';

function Person(props) {
  return (
    <div className="person">
      <img className="img" src={avatar} alt="" />
      <h3 className="title">{props.name}</h3>
      <p className="age">Age: <span>{props.age}</span></p>
      <p>Professia: {props.children}</p>
    </div>
  );
}

export default Person
