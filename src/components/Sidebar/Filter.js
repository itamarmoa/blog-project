import React, {Component} from 'react';
import TagList from './TagList';
import AuthorsList from './AuthorsList';
import MonthsList from './MonthsList';
import {withRouter,NavLink, Link} from 'react-router-dom';

class Filter extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let searchAllPosts = "?page=all";
    return (
      <div className="well">
        <h3>Filter Posts</h3>

        <div className="list-group">
          <NavLink
            exact={true}
            strict={true}
            to={{
              search: searchAllPosts
            }}
            className="list-group-item"
            activeClassName="list-group-item active"
            isActive={(match, location)=> location.search === searchAllPosts}
          >
            <span className="badge">{this.props.totalPosts}</span>
            Show All Posts
          </NavLink>
        </div>

        <TagList tags={this.props.tags}/>
        <AuthorsList authors={this.props.authors}/>
        <MonthsList months={this.props.months}/>


      </div>
    )
  }
}

export default Filter;
