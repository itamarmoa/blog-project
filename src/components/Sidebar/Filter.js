import React, {Component} from 'react';
import TagList from './TagList';
import AuthorsList from './AuthorsList';

export default class Filter extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="well">
        <h3>Filter Posts</h3>

        <div className="list-group">
          <a href="#" className="list-group-item active">
            <span className="badge">8</span>
            Show All Posts
          </a>
        </div>
        <TagList/>



        <h4><small className="glyphicon glyphicon-time"></small> Month</h4>
        <div className="list-group">
          <div>
							<span className="list-group-item disabled">
								2015
							</span>
            <a href="#" className="list-group-item">
              <span className="badge">4</span>
              January
            </a>
          </div>
          <div>
							<span className="list-group-item disabled">
								2014
							</span>
            <a href="#" className="list-group-item">
              <span className="badge">4</span>
              December
            </a>
          </div>
        </div>
      </div>
    )
  }
}
