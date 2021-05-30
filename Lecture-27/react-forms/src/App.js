import React, { Component } from 'react'
import Form from './Form';
import MultiForm from './MultiForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from react app</h1>
        <Form />

        <h1>Multiple Input Form</h1>

        <MultiForm />

      </div>
    )
  }
 }

export default App;
