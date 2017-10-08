import React from 'react';
import {Route, Redirect} from 'react-router';

import PostsPage from './Posts/PostsPage';
import AdminPage from './Admin/AdminPage';
import NavBar from './NavBar/NavBar';
import SinglePostPage from './Posts/SinglePostPage';
import EditPage from './Admin/Edit/EditPage';

class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <NavBar />
          {/*<Route exact path="/" render={()=> <Redirect to="/posts/?page=1"/>}/>*/}
          <Route path={'/posts'} component={PostsPage}/>
          <Route path={'/admin'} component={AdminPage}/>
          <Route path={'/post/:id'} component={SinglePostPage}/>
          <Route path={'/edit/post/:id'} component={EditPage}/>
      </div>
    )
  }
}

export default App;
