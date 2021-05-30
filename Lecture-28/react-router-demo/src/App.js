import React, { Component } from 'react'
import About from './About';
import Contact from './Contact';
import Dog from './Dog';
import { Route,Switch,Link } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
  
  }


  render() {
    return (
      <div className="App">

        {/* <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/dog">Dog</a></li>
          </ul>
        </nav> */}

        <nav>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dog">Dog</Link></li>
          </ul>
        </nav>


        
        <Switch>

          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dog" component={Dog} />
       
        </Switch>
      </div>
    )
  }
}

export default App;
