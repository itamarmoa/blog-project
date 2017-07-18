import React, {Component} from 'react';
import PostsListItem from './PostsListItem';

export default class PostsLists extends Component {
  constructor(props){
    super(props);
  }
  renderItem(item){
    return (<PostsListItem key={item.id} {...item}/>)
  }
  render(){
    return (
      <div>
        {this.props.posts.map(this.renderItem)}
      </div>
    )
  }
}
