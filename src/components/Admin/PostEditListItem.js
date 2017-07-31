import React, {Component} from 'react';
import convertTimestamp from '../../services/convertTimestamp';
import {withRouter, NavLink} from 'react-router-dom';


class PostEditListItem extends Component {
  constructor(props){
    super(props);
  }
  goTo(){
    this.props.history.push('/edit/post/'+this.props.title);
  }
  render(){
    return (
      <tr onClick={this.goTo.bind(this)}>
          <th scope="row">1</th>
          <td>{this.props.title}</td>
          <td>{this.props.author}</td>
          <td>{convertTimestamp(this.props.date)}</td>
      </tr>
    )
  }
}

let connected = withRouter(PostEditListItem);
export default connected;
