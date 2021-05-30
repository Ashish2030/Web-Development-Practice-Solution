import React, { Component } from 'react'
import About from './About';
import Contact from './Contact';
import Dog from './Dog';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page:'about'
    }
  }

  changePage = (newPage) => {
    this.setState({ page: newPage });
  }

  renderPage = () => {

    if(this.state.page==='about') return <About />
    else if (this.state.page === 'contact') return <Contact />
    if(this.state.page==='dog') return <Dog />
  }

  render() {
    return (
      <div className="App">

        <nav>
          <ul>
            <li><a onClick={this.changePage.bind(this,'about')}>About</a></li>
            <li><a onClick={this.changePage.bind(this,'contact')}>Contact</a></li>
            <li><a onClick={this.changePage.bind(this,'dog')}>Dog</a></li>
          </ul>
        </nav>

        {this.renderPage()}


      
      </div>
    )
  }
}

export default App;
