import React, { Component } from 'react'
import Form from './Form';
import './Todo.css';


class TodoList extends Component {

    constructor() {
        console.log("INSIDE CONSTRUCTOR")
        super();

        this.state = {
            todos: [
                {
                    name:'Buy Grocieries'
                },
                {
                    name:'Learn React'
                },
                {
                    name:'Watch Movies'
                },
            ]
        }
    }

    createTodoHandler = (item) => {
        const newTodos = this.state.todos.slice();
        newTodos.push(item);

        this.setState({ todos: newTodos });
    }


    deleteItemHandler = (idx) => {
        const newTodos = this.state.todos.slice();
        newTodos.splice(idx, 1);
        this.setState({ todos: newTodos });
    }

    moveUpwardHandler = (idx) => {
        if (idx > 0) {
            const newTodos = this.state.todos.slice();

            const temp = newTodos[idx];
            newTodos[idx] = newTodos[idx - 1];
            newTodos[idx - 1] = temp;

            this.setState({ todos: newTodos });
        }
    }

    moveDownwardHandler = (idx) => {
        if (idx < this.state.todos.length-1) {
            const newTodos = this.state.todos.slice();

            const temp = newTodos[idx];
            newTodos[idx] = newTodos[idx + 1];
            newTodos[idx + 1] = temp;

            this.setState({ todos: newTodos });
        }
    }


    render() {
        console.log('INSIDE RENDER');
        let items = this.state.todos.map((todo,idx) => {
            return <li key={idx}>{todo.name}
                <span>
                    <button onClick={this.deleteItemHandler.bind(this,idx)}>x</button>
                    <button onClick={this.moveUpwardHandler.bind(this,idx)} >⬆️</button> 
                    <button onClick={this.moveDownwardHandler.bind(this,idx)}>⬇️</button>
                </span>
            </li>
        })


        return (
            <div className="Todo">
                <Form createTodo={this.createTodoHandler} />
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default TodoList;
