import React, {Component} from 'react';

export default class Pagger extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <ul className="pager">
        <li className="previous">
          <a href="#">&larr; Older</a>
        </li>
        <li className="next">
          <a href="#">Newer &rarr;</a>
        </li>
      </ul>
    )
  }
}
