import React, {Component} from 'react';
import SearchWidget from './SearchWidget';
import Filter from './Filter';

export default class Sidebar extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <aside className="col-md-4">
        <SearchWidget/>
        <Filter/>
      </aside>
    )
  }
}
