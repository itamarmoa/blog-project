import React, {Component} from 'react';
import convertTimestamp from '../../services/convertTimestamp';
import {Link} from 'react-router-dom';


export default class PostEditListItem extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <tr>
        {/*<Link to={'/edit/post/'+this.props.title}>*/}
          <th scope="row" onClick={(e)=> this.context.router.push('/posts')}>1</th>
          <td>{this.props.title}</td>
          <td>{this.props.author}</td>
          <td>{convertTimestamp(this.props.date)}</td>
        {/*</Link>*/}
      </tr>
    )
  }
}
