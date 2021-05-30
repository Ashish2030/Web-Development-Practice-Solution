import React, { Component } from 'react';
import BlogList from './Components/Blog/BlogList';
import { Route,Switch,} from 'react-router-dom';
import NewBlog from './Components/Blog/NewBlog';
import ShowBlog from './Components/Blog/ShowBlog';
import EditBlog from './Components/Blog/EditBlog';
import Navbar from './Components/Blog/NavigationBar';


class App extends Component {
  render() {
    return (
      <div>

        <Navbar />

        <Switch>
          <Route exact path="/blogs" component={BlogList} />
          <Route exact path="/blogs/new" component={NewBlog} />
          <Route exact path="/blogs/:id" component={ShowBlog} />
          <Route exact path="/blogs/:id/edit" component={EditBlog} />
        </Switch>

      </div>
    );
  }
}

export default App;
