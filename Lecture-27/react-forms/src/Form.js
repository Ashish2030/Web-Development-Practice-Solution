import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            age:''
        }

    }


    nameChangeHandler = (e) => {
        // console.log(e.target.value);
        this.setState({ username: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.age);

        this.setState({username:'',age:'',password:''})

    }

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    ageChangeHandler = (e) => {
        this.setState({ age: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                
                <input
                    type="text"
                    onChange={this.nameChangeHandler}
                    placeholder="username"
                    value={this.state.username}
                />
                <input
                    type="password"
                    onChange={this.passwordChangeHandler}
                    placeholder="password"
                    value={this.state.password}
                />
                <input
                    type="text"
                    onChange={this.ageChangeHandler}
                    placeholder="Age"
                    value={this.state.age}
                />

                <button>Submit!</button>

            </form>
        )
    }
}

export default Form;
