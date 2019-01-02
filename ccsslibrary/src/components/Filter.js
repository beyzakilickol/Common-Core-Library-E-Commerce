import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'



class Filter extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){

    return (

     <div>
    Hey

     </div>



    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Filter)
