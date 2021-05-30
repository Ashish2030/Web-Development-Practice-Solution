import './App.css';
import helpful,{ sing,dog} from './Helper';
import Hello from './Hello';
import React from 'react';
import Navbar from './Navbar';
import Person from './Person';

const moods = ["Angry", "Happy", "Paranoid", "Sad"];

class App extends React.Component {


  getMood() {
  
    return moods[Math.floor(Math.random() * moods.length)];
  }

  render() {

    let num = Math.floor(Math.random() * 10 + 1);
    let msg;
    if (num === 5) {
      msg = (
          <div>
          <h2>My Message</h2>
          <p>This is my Random msg</p>
          </div>
        )
    } else {
      msg=<h3>Number is not 5</h3>
    }

    
    return (
      <div>
          <Navbar />
          
          <Hello from="Kartik" to="Prateek" />
          <Hello from="Sabeel" to="Kartik" />
          <Hello from="Vivek" to="Garvit" />
          
        
          <h1>My Random Number {num}</h1>
          {/* <h1>My Fav Random Number :{Math.floor(Math.random()*10+1)} </h1> */}
          <h2>My Mood is : {this.getMood()} </h2>

          { num===7? <Person /> : '' }
          
        {msg}
        

          <Person name="Sabeel" age={21} hobbies={['singing','dancing','skating']} isAdult />
          <Person name="Kartik" age={25} hobbies={['coding','reading']} />
        
      </div>
    );
  } 
}

export default App;
