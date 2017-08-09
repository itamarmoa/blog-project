import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class MonthsList extends Component{
  constructor(props){
    super(props);
  }
  renderItem(item){
    let search = '?month='+item.name;
    return (
        <NavLink
          to={{
            search
          }}
          className="list-group-item"
          key={item.name}
          isActive={(match, location)=> location.search === search}
        >
          <span className="badge">{item.occur}</span>
          {item.name}
        </NavLink>
    )
  }

  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-time"/>Month</h4>
        <div className="list-group">
          {this.props.months.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
