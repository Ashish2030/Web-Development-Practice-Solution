import React from 'react'


const Person = (props) => {
    
    console.log(props);

    // Props are immutable
    // props.name = 'Anonymous';

    const hobbies = props.hobbies.map(h => {
        return <li>{h}</li>
    })

    return (
        <div>
            <h1>{ props.name }</h1>
            <p>My Age is : {props.age} </p>
            <ul>
                {hobbies}
            </ul>

        </div>
    )
}

export default Person;
