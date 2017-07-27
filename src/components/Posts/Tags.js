import React, {Component} from 'react';

export default class Tags extends Component{
  constructor(props){
    super(props);

  }
  renderTag(tag){
    return (
      <span key={tag}>
        <a href="#" className="label label-default">
        {tag}
        </a>
      </span>
    )
  }
  render(){
    if(Array.isArray(this.props.tags)){
      return (
        <div>
          <b>Tags:&nbsp;</b>
          { this.props.tags.map( this.renderTag ) }
        </div>
      )
    }
    return (
      <div>

      </div>
    )
  }
}
