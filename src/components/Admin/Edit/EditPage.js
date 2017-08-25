import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost,getHTML,getMD} from '../../../services/actions';
import PostsService from '../../../services/PostsService';
import Footer from '../../Footer/Footer';
import TopEdit from './TopEdit';
import ContentEditor from './ContentEditor';

class EditPage extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getPost(this.props.match.params.title);
  }
  componentWillUpdate(nextProps){
    if(this.props.postHeader !== nextProps.postHeader){
      this.loadContents(nextProps.postHeader);
    }
  }
  loadContents({htmlPath, mdPath}){
    this.props.getPostHTML(htmlPath);
    this.props.getPostMD(mdPath);
  }
  handleSubmit(data){
    console.log(data);
  }
  render(){
      return (
        <div className="container">
          <div className="row">
            <section className="col-md-12">
              <h2 className="page-header">Edit posts</h2>
              <form >
                <TopEdit {...this.props.postHeader}/>
                <ContentEditor
                  mdContent={this.props.postMD}
                  htmlContent={this.props.postHTML}
                />
                <hr/>
                <button type="submit" className="btn btn-primary">Save Post</button>
                <button type="button" className="btn btn-danger pull-right">Delete Post</button>
              </form>
            </section>
          </div>
          <hr/>
          <Footer/>
        </div>
      )
  }
}


function mapStateToProps(state){
  return {
    postHeader: state.currentPost.header,
    postHTML: state.currentPost.content.html,
    postMD: state.currentPost.content.md
  }
}
function mapDispatchToProps(dispatch){
  return{
    getPost: (title)=> dispatch(getPost(title)),
    getPostMD: (filename)=> dispatch(getMD(filename)),
    getPostHTML: (fileName)=> dispatch(getHTML(fileName))
  }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(EditPage);
export default connected
