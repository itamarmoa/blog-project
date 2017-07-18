import React, {Component} from 'react';

export default class CommentForm extends Component{
  render(){
    return (
      <div className="well">
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div className="form-group">
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
