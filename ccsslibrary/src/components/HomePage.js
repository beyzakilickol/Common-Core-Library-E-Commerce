import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/homepage.css'
import Filter from './Filter'
import deskimg from '../assets/img/desk.jpg'


class HomePage extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){

    return (

     <div>
     <header className="masthead bg-primary text-white text-center" >
         <div className="row padMar">
             <div className="col padMar">
                 <div className="input-group">
                     <div className="input-group-prepend "></div><input className="mainsearch form-control autocomplete" type="text" placeholder="Search by title or resource type" />
                     <div className="input-group-append"><button className="searchButton btn btn-warning" type="button"><i className="fa fa-search"></i></button></div>
                 </div>
             </div>
         </div>
     </header>
      <Filter />
      <section id="portfolio" className="portfolio" >
          <aside></aside>
          <div className="gradecontainer container">
              <h3 className="gradetitle text-uppercase text-center text-secondary" >elementary school popular resources</h3>
              <hr className="star-dark mb-5" />
              <div className="row">
                  <div className="col">
                      <div >
                          <div className="cardcontainer container">
                              <div className="cust_bloglistintro"></div>
                              <div className="row flex-nowrap">
                                  <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser" ><a href="#"><img className="img-fluid cardimg" src={deskimg} /></a>
                                      <h3>Heading</h3>
                                      <p className="text-secondary cardtext" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><hr className="carddivider"/><a href="#" className="h4"><i className="fa fa-arrow-circle-right"></i></a></div>

                  </div>
              </div>
          </div>
          </div>
          </div>
          </div>
          <div className="container">
              <h3 className="text-uppercase text-center text-secondary">middle school popular resources</h3>
              <hr className="star-dark mb-5"/>
              <div className="row">
                  <div className="col" >
                      <div >
                          <div className="cardcontainer container">
                              <div className="cust_bloglistintro"></div>
                              <div className="row flex-nowrap">
                                  <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser" ><a href="#"><img className="img-fluid cardimg" src={deskimg} /></a>
                                      <h3>Heading</h3>
                                      <p className="text-secondary cardtext">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><hr className="carddivider"/><a href="#" className="h4"><i className="fa fa-arrow-circle-right"></i></a></div>


                  </div>
              </div>
          </div>
          </div>
          </div>
          </div>
          <div className="container">
              <h3 className="text-uppercase text-center text-secondary">high school popular resources</h3>
              <hr className="star-dark mb-5"/>
              <div className="row">
                  <div className="col">
                      <div >
                          <div className="cardcontainer container">
                              <div className="cust_bloglistintro"></div>
                              <div className="row flex-nowrap">
                                  <div className="col-md-4 offset-0 d-flex flex-column cust_blogteaser" ><a href="#"><img className="img-fluid cardimg" src={deskimg} /></a>
                                      <h3>Heading</h3>
                                      <p className="text-secondary cardtext" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><hr className="carddivider"/><a href="#" className="h4"><i className="fa fa-arrow-circle-right"></i></a></div>

                  </div>
              </div>
          </div>
          </div>
          </div>
          </div>
      </section>
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


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
