import React, {Component} from 'react';

import Config from '../../config';

export default class NavBar extends Component {
  constructor(){
    super();
    this.items = this.getItems()
  }

  getItems(){
    return Config.menuItems;
  }

  renderItem(item){
    return (
      <li key={item.name.charAt(0)}><a href={item.link}>{item.name}</a></li>
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
