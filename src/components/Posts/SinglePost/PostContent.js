import React, {Component} from 'react';
import renderHTML from 'react-render-html';

export default class PostContent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
          <section>
            {renderHTML(this.props.content)}
          </section>
        )
  }
}
