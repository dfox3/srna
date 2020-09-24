import React, { Component } from 'react';
import "./Home.css";
import { Users } from './../components/Users'
import { DisplayBoard } from './../components/DisplayBoard'

import CreateUser from './../components/CreateUser'
import SetUpRun from './../components/SetUpRun'
import SignupButton from './../components/SignupButton'
import LoginButton from './../components/LoginButton'
import { getAllUsers, createUser } from './../services/UserService'

class Home extends Component {
  
  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      this.setState({user})
  }

  render() {
   	return (
	    <div className="Home">
	      	<div className="container mrgnbtm">
	          <div className="row">
	            <div className="col-md-8">
	                <SetUpRun/>
	            </div>
	          </div>
	        </div>
	        <div className="row mrgnbtm">
	          <Users users={this.state.users}></Users>
	        </div>
	    </div>
    );
  }
}

export default Home;