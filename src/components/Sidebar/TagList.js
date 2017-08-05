import React, {Component} from 'react';

export default class TagList extends Component{
  constructor(props){
    super(props);
    this.items = [{"name":"ADII","occur":4},{"name":"Grunt","occur":2},{"name":"JavaScript","occur":6},{"name":"Tools","occur":2},{"name":"jQuery","occur":2}];
  }
  renderItem(tag){
    return (
      <a href={'?tag='+tag.name} className="list-group-item" key={tag.name}>
        <span className="badge">{tag.occur}</span>
        {tag.name}
      </a>
    )
  }
  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-tag" /> Category</h4>
        <div className="list-group">
          {this.items.map(this.renderItem)}
        </div>
      </div>
    )
  }
}
