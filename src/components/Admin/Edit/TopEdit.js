import React, {Component} from 'react';

export default class TopEdit extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillUpdate(nextProps){
    if(this.props.title !== nextProps.title){
      this.setState({
        postTitle: nextProps.title,
        postAuthor: nextProps.author,
        postTags: nextProps.tags,
        postDescription: nextProps.description
      })
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render(){
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group required">
            <label htmlFor="postTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              name="postTitle"
              placeholder="Post Title"
              required
              autoFocus
              value={this.state.postTitle}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group required">
            <label htmlFor="postAuthor">Author</label>
            <input
              type="postAuthor"
              className="form-control"
              id="postAuthor"
              name="author"
              placeholder="Post Author"
              required
              value={this.state.postAuthor}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postTags">Tags</label>
            <input
              type="text"
              className="form-control"
              id="postTags"
              name="tags"
              placeholder="Post Tags"
              value={this.state.postTags}
              onChange={this.handleInputChange}
            />

              <p className="help-block">Separate multiple tags with a comma.
                e.g.<code>Grunt,Tools</code></p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group required">
            <label htmlFor="postDescription">Description</label>
            <textarea
              className="form-control"
              id="postDescription"
              name="postDescription"
              rows="10"
              placeholder="Post Description"
              value={this.state.postDescription}
              required
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
