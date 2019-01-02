import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Filter from './Filter'

class BaseLayout extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return (

     <div>
     
     {this.props.children}
     </div>



    )
  }
}

export default withRouter(BaseLayout)
