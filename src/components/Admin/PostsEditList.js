import React, {Component} from 'react';
import PostEditListItem from './PostEditListItem';


export default class PostsEditList extends Component {
  constructor(props){
    super(props);
  }
  renderItem(item){
    return (<PostEditListItem key={item.title} {...item}/>)
  }
  render(){
    return (
      <table className="table table-bordered table-hover table-striped postsTable">
        <thead>
        <tr>
          <th>#</th>
          <th>
            Title
            <span className="pull-right">

								</span>
          </th>
          <th>
            Author
            <span className="pull-right">

								</span>
          </th>
          <th>
            Date
            <span className="pull-right">
									<i className="glyphicon glyphicon-chevron-down"/>
								</span>
          </th>
        </tr>
        </thead>
        <tbody>
        {this.props.posts.map(this.renderItem)}
        </tbody>
      </table>
    )
  }
}
