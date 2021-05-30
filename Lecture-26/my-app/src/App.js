import React, { Component } from 'react'
import Person from './Person';

class App extends Component {

  constructor() {

    super()

    this.state = {
      persons: [
        {
          name: "Kartik",
          age:25
        },
        {
          name: "Sabeel",
          age:21
        },
        {
          name: "Prateek",
          age:25
        },
        {
          name: "Monu",
          age:22
        }
      ]
    }
  }

  nameChangeHandler=(idx)=> {

    let person = this.state.persons[idx];
    
    // const newName = person.name.toUpperCase();

    // person.name = newName;

    person.name = person.name.toUpperCase();
      
    const newPersons = this.state.persons.slice();
    newPersons[idx] = person;

    this.setState({
        persons:newPersons
    })

  }


  render() {

    const persons = this.state.persons.map((p,idx) => {
      
      return <Person
        key={idx}
        name={this.state.persons[idx].name}
        age={this.state.persons[idx].age}
        clicked={this.nameChangeHandler.bind(this,idx)}
      />
    })


    return (
      <div>
        {persons}
      </div>
    )
  }
}

export default App;

