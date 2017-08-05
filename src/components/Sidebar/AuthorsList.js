import React, {Component} from 'react';

export default class AuthorsList extends Component{
  constructor(props){
    super(props);
    this.items = [{"name":"Alex Ilyaev","occur":2},{"name":"Amit Choukroun","occur":2},{"name":"Ilan Cohen","occur":4}];
  }
  renderItem(item){
    return (
      <a href={'?author='+item.name} className="list-group-item" key={item.name}>
        <span className="badge">{item.occur}</span>
        {item.name}
      </a>
    )
  }

  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-user"/> Author</h4>
        <div className="list-group">
          {this.items.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
