import React, {Component} from 'react';

export default class TopEdit extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group required">
            <label htmlFor="postTitle">Title</label>
            <input type="text" className="form-control" id="postTitle" name="postTitle"
                   placeholder="Post Title" required autoFocus
                   value={this.props.title} />
          </div>
          <div className="form-group required">
            <label htmlFor="postAuthor">Author</label>
            <input type="text" className="form-control" id="postAuthor" name="postAuthor"
                   placeholder="Post Author" required
                   value={this.props.author}/>
          </div>
          <div className="form-group">
            <label htmlFor="postTags">Tags</label>
            <input type="text" className="form-control" id="postTags" name="postTags"
                   placeholder="Post Tags"
                   value={this.props.tags} />

              <p className="help-block">Separate multiple tags with a comma.
                e.g.<code>Grunt,Tools</code></p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group required">
            <label htmlFor="postDescription">Description</label>
            <textarea className="form-control" id="postDescription" name="postDescription"
                      rows="10" placeholder="Post Description"
                      required>{this.props.description}</textarea>
          </div>
        </div>
      </div>
    )
  }
}
