import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import welcome from '../images/welcome.jpg';
class Profile extends Component {

 
  render() {

    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      // <div class="card bg-light text-dark">
        <div class="c">
        <h1> Welcome, {currentUser.username}</h1>
        <img src = {welcome} width="100%"></img>
        <h4>Continue Shopping !!!</h4>
        {/* <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p> */}
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
          </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);