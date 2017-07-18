import React from 'react';
import {Route, Redirect} from 'react-router';

import PostsPage from './Posts/PostsPage';
import Admin from './Admin/Admin';
import NavBar from './NavBar/NavBar';
import SinglePostPage from './Posts/SinglePostPage';

class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <NavBar />
        {/*<Redirect exact from={'/'} to={'/posts'}/>*/}
        <Route path={'/posts'} component={PostsPage}/>
        <Route path={'/admin'} component={Admin}/>
        <Route path={'/post/:title'} component={SinglePostPage}/>
      </div>
    )
  }
}

export default App;
