import React, {Component} from 'react';

export default class AuthorsList extends Component{
  constructor(props){
    super(props);
    this.items =
  }

  render(){
    return (
      <div>
        <h4><small className="glyphicon glyphicon-user"/> Author</h4>
        <div className="list-group">
          <a href="#" className="list-group-item">
            <span className="badge">2</span>
            Alex Ilyaev
          </a>
          <a href="#" className="list-group-item">
            <span className="badge">2</span>
            Amit Choukroun
          </a>
          <a href="#" className="list-group-item">
            <span className="badge">4</span>
            Ilan Cohen
          </a>
        </div>
      </div>
    )
  }
}
