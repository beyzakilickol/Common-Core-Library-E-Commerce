import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ccsslogo from '../assets/img/ccsslogo.png'
import '../assets/css/footer.css'



class Footer extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){

    return (
      <div>
      <footer class="footer text-center">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 mb-5 mb-lg-0">
                      <h4 class="text-uppercase mb-4"><img id="logoFooter" src={ccsslogo} /></h4>
                  </div>
                  <div class="col-md-4 justify-content-center align-items-center align-content-center align-self-center mb-5 mb-lg-0">
                      <ul class="list-inline text-center d-flex d-lg-flex flex-row justify-content-end align-items-center align-content-end align-self-center justify-content-lg-center align-items-lg-end">
                          <li class="list-inline-item"><a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i class="fa fa-facebook fa-fw"></i></a></li>
                          <li class="list-inline-item"><a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i class="fa fa-google-plus fa-fw"></i></a></li>
                          <li class="list-inline-item"><a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i class="fa fa-twitter fa-fw"></i></a></li>
                          <li class="list-inline-item"><a class="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i class="fa fa-dribbble fa-fw"></i></a></li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <h4 class="text-uppercase mb-4">About us</h4>
                      <p class="lead mb-0"><span>Common Core Library is a platform where teachers can buy and sell their educational materials.&nbsp;</span></p>
                  </div>
              </div>
          </div>
      </footer>
      <div class="copyright py-4 text-center text-white">
          <div class="container"><small>Copyright © Common Core Library &nbsp;2018</small></div>
      </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(Footer)
