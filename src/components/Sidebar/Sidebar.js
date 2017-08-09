import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchWidget from './SearchWidget';
import Filter from './Filter';
import {getSidebarValues, getPosts} from '../../services/actions';

import queryString from 'query-string';
import * as CONST from '../../constants';

class Sidebar extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getSidebarValues();
    let query = queryString.parse(this.props.location.search);
    this.getInfo(query);
  }
  componentWillReceiveProps({location}){
    if(this.props.location.search !== location.search){
      let query = queryString.parse(location.search);
      this.getInfo(query);
    }
  }
  getInfo(query){
    if(!query.tag && !query.author && !query.month){
      if(query.page === "all")
        this.props.getPosts();
      this.props.getPosts(CONST.PAGE,query.page);
    }
    else if(query.tag){
      this.props.getPosts(CONST.TAG, query.tag);
    }
    else if(query.author){
      this.props.getPosts(CONST.AUTHOR, query.author);
    }
    else if(query.month){
      this.props.getPosts(CONST.MONTH, query.month);
    }
  }
  render(){
    return (
      <aside className="col-md-4">
        <SearchWidget/>
        <Filter {...this.props.sidebarValues}/>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  return {
    sidebarValues: state.sidebar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (by, query)=> dispatch(getPosts(by, query)),
    getSidebarValues: ()=> dispatch(getSidebarValues())
  }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default withRouter(connected);
