import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List App</h1>
        <TodoList />
      </div>
    )
  }
}

export default App;
