import React from 'react';
import {Route,Redirect} from 'react-router';

import NavBar from './NavBar/NavBar';
import Posts from './Posts/Posts';
import Admin from './Admin/Admin';

import '../assets/css/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path={'/posts'} component={Posts}/>
        <Route path={'/admin'} component={Admin}/>

      </div>
    )
  }
}

export default App;
