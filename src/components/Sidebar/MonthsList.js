import React, {Component} from 'react';
import {convert} from '../../services/Dater';

export default class MonthsList extends Component{
  constructor(props){
    super(props);
    this.items = [{"name":"2014 December","occur":4},{"name":"2015 January","occur":4}];
  }
  renderItem(item){
    return (
      <div>
        <a href={'?month='+item.name} className="list-group-item">
          <span className="badge">{item.occur}</span>
          {item.name}
        </a>
      </div>
    )
  }

  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-time"/> Month</h4>
        <div className="list-group">
          {this.items.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
