import React, {Component} from 'react';

export default class SearchWidget extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="well">
        <h4>Search</h4>
        <form>
          <div className="input-group">
            <input type="search" name="search" className="form-control" />
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit">
									<i className="glyphicon glyphicon-search" />
								</button>
							</span>
          </div>
        </form>
      </div>
  )
  }
}
