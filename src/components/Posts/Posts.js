import React, {Component} from 'react';
import PostsListItem from './PostsListItem';
import Pagger from './Pagger';
import Footer from './Footer';

export default class Posts extends Component{
  constructor(){
    super();
    this.posts =[
      {
        id: 0,
        title: 'AngularJS - Controllers',
        author: 'Ilan Cohen',
        postDate: '14 Jan, 2015',
        description: "In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.",
        tags: [
          'Javasctipr',
          'AngularJS'
        ]
      },
      {
        id: 1,
        title: 'AngularJS - Controllers',
        author: 'Ilan Cohen',
        postDate: '14 Jan, 2015',
        description: "In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.",
        tags: [
          'C#',
          'ReactJS'
        ]
      },
      {
        id: 2,
        title: 'AngularJS - Controllers',
        author: 'Ilan Cohen',
        postDate: '14 Jan, 2015',
        description: "In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.",
        tags: [
          'Javasctipr',
          'AngularJS'
        ]
      },
      {
        id: 3,
        title: 'AngularJS - Controllers',
        author: 'Ilan Cohen',
        postDate: '14 Jan, 2015',
        description: "In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.",
        tags: [
          'Javasctipr',
          'AngularJS'
        ]
      }
    ];
  }
  renderItem(item){
    return (<PostsListItem key={item.id} {...item}/>)
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="col-md-5">
            <h2 className="page-header">Showing {this.posts.length} posts</h2>
            {this.posts.map( this.renderItem )}
            <Pagger/>
          </section>
          <hr/>
          <Footer/>
        </div>
      </div>
    )
  }
}
