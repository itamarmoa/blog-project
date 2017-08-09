import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Pagger extends Component{
  constructor(){
    super();
  }
  buttonGen(type){
    let totalPosts = parseInt(this.props.values.totalPosts);
    let currentPage = parseInt(this.props.current);

    switch (type){
      case "back":
        return (
          currentPage <= 1 ?
            {
              className: "previous disabled",
              style: {
                pointerEvents: 'none'
              },
              to: "#"
            }
            :
            {
              className: "previous",
              to: {
                search: "?page=" + (currentPage - 1)
              }
            }
        )
      case "next":
        return (
          currentPage >= Math.ceil(totalPosts/3) ?
            {
              className: "next disabled",
              style: {
                pointerEvents: 'none'
              },
              to: "#"
            }
            :
            {
              className: "next",
              to: {
                search: "?page=" + (currentPage + 1)
              }
            }
        )
    }
  }
  render(){
    let backButton = this.buttonGen("back");
    let nextButton = this.buttonGen("next");
    return (
      <ul className="pager">
        <li className={backButton.className}>
          <Link
            {...backButton}
          >
            &larr; Older
          </Link>
        </li>
        <li className={nextButton.className}>
          <Link
            {...nextButton}
          >
            Newer &rarr;
          </Link>
        </li>
      </ul>
    )
  }
}
