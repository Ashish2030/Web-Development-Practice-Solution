import React, { Component } from 'react'
import axios from 'axios';

class Person extends Component {

    constructor() {
        super();
        console.log("INSIDE CONSTRUCTOR");
        this.state = {
            fact:''
        }
    }

    componentDidMount() {
        console.log("INSIDE COMPONENT DID MOUNT");
        axios.get('https://cat-fact.herokuapp.com/facts')
            .then(facts => {
                const fact = facts.data[0];
                this.setState({ fact: fact.text });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        console.log("INSIDE RENDER")

        return (
            <div>
                <h1>{ this.state.fact}</h1>
            </div>
        )
    }
}

export default Person;
