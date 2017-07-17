import React, {Component} from 'react';
import SearchWidget from 'SearchWidget';

export default class Sidebar extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <aside className="col-md-4">
        <SearchWidget/>
      </aside>
    )
  }
}
