import React, {Component} from 'react';
import MarkDown from 'react-markdown';

export default class ContentEditor extends Component{
  constructor(props){
    super(props);
    this.state = {
      postMd: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillUpdate(nextProps){
    if(this.props.mdContent !== nextProps.mdContent){
      this.setState({
        postMd: nextProps.mdContent
      })
    }
  }
  handleInputChange(event) {
    event.preventDefault();
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
        <div className="form-group required col-sm-6">
          <label htmlFor="postMd">Markdown</label>

          <textarea
            className="form-control previewPane"
            id="postMd"
            name="postMd"
            rows="20"
            placeholder="Post Markdown"
            required
            value={this.state.postMd}
            onChange={(this.handleInputChange)}
          >
					</textarea>
        </div>

        <div className="col-sm-6">
          <label>HTML Preview (read only)</label>

          <div className="form-control previewPane">
            <MarkDown source={this.state.postMd}/>
          </div>
        </div>
      </div>
    )
  }
}
