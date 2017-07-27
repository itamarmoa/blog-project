import React, {Component} from 'react';
import PostsService from '../../../services/PostsService';
import Footer from '../../Footer/Footer';
import TopEdit from './TopEdit';

export default class EditPage extends Component{
  constructor({match}){
    super(match);
    this.post = PostsService.getPost(match.params.title);
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="col-md-12">
            <h2 className="page-header">Edit posts</h2>
            <TopEdit post={this.post}/>
          </section>
        </div>
        <hr/>
        <Footer/>
      </div>
    )
  }
}
