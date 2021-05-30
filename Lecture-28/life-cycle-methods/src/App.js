import React, { Component } from 'react'
import './App.css';
import Person from './Person';
import GithubUserInfo from './GithubUserInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Person /> */}
        
        <GithubUserInfo username="sabeelhps" />
        {/* <GithubUserInfo username="facebook" />
        <GithubUserInfo username="YASHAVkumar" /> */}
      </div>
    )
  }
}

export default App;
