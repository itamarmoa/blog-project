import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

import Config from '../../config';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.items = this.getItems();
  }
  getItems(){
    return Config.menuItems;
  }
  renderItem(item){
    return (
      <li key={item.name}>
        <NavLink
          exact
          to={item.link}
          activeStyle={{
            color: '#fff'
          }}
          isActive={(match, location)=> location.pathname == item.link.pathname}
        >
          {item.name}
        </NavLink>
      </li>
    )
  }

  render(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                {
                  this.items.map( this.renderItem )
                }
              </ul>
            </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar);
