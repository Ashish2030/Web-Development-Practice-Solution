import React, { Component } from 'react'

class MultiForm extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            password:''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }


    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <input type="text"
                    onChange={this.changeHandler}
                    placeholder="username"
                    name="username"
                />
                <input type="email"
                    onChange={this.changeHandler}
                    placeholder="email"
                    name="email"
                />
                <input type="password"
                    onChange={this.changeHandler}
                    placeholder="password"
                    name="password"
                />
                

                <button>Submit!</button>
            </form>
        )
    }
}

export default MultiForm;
