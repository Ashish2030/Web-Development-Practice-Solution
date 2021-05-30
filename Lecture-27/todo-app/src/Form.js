import React, { Component } from 'react'
import './Todo.css';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:''
        }
    }


    todoChangeHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state)
        this.setState({name:''})
    }



    render() {
        return (
            <form onSubmit={this.submitHandler} className="Form">
                <input type="text"
                    placeholder="Add Todo"
                    onChange={this.todoChangeHandler}
                    value={this.state.name}
                />
                <button>Add!</button>
            </form>
        )
    }
}

export default Form;
