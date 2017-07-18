import React, {Component} from 'react';
import FileService from '../../../services/FileService';
import renderHTML from 'react-render-html';

export default class PostContent extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
    this.loadHTML('/'+this.props.htmlPath);
  }
  loadHTML(fileName) {
    FileService.fetchExternalHTML(fileName).then(
      (response)=>{
        this.setState({response});
      }
    )
  }

  render(){
    if(this.state.response){
      return (
        <section>
          {renderHTML(this.state.response)}
        </section>
      )
    }
    else{
      return <h1>Loading...</h1>
    }
  }
}
