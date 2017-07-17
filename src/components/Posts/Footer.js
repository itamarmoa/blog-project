import React, {Component} from 'react';

export default class Footer extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Copyright &copy; Itamar Moatty 2017</p>
          </div>
        </div>
      </footer>
    )
  }
}
