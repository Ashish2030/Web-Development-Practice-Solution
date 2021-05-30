import React from 'react';
import './Person.css';

const Person = (props) => {
    
    return (
        <div className="Person" onClick={props.clicked} >
            <h1>Name :{props.name} </h1>
            <h2>Age :{props.age} </h2>
            <p>My name is {props.name} and age is {props.age} </p>
        </div>
    )
}

export default Person;