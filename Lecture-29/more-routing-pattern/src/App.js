import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Route, Switch,Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Switch>
            <Route exact path="/" render={()=><Home name="Kartik" />} />
            <Route exact path="/about/:name" render={(routesParams)=><About luckyNum="39" stuff={routesParams} />} />
            <Route exact path="/contact/" component={Contact} />
        </Switch>

      </div>
    );
  }
}

export default App;
