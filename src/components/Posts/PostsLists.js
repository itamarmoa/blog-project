import React, {Component} from 'react';
import PostsListItem from './PostsListItem';

export default class PostsLists extends Component {
  constructor(props){
    super(props);
  }
  renderItem(item){
    return (<PostsListItem key={item._id} {...item}/>)
  }
  render(){
    console.log(this.props.posts)
    if(Array.isArray(this.props.posts)){
      return (
        <div>
          {this.props.posts.map(this.renderItem)}
        </div>
      )
    }
    else {
      return (<div></div>)
    }
  }
}
