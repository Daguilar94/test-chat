import React, { Component } from 'react';
import User from './User.js';
import axios from 'axios';
import { browserHistory } from 'react-router';
import './UserWindow.css'

class UserWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }

    axios.get("/rooms/1/users")
    .then(response => {
      console.log(response.data);
      this.setState({
        users: response.data
      })
      const validUser = this.state.users.find(user => user.id == this.props.currentUser)
      if (validUser === undefined) {
        browserHistory.push('/login')
      }
    })
    .catch(error => {
      console.log(error);
    })
  } 

  render() {
    return (
      <div className="user-container">
        {this.state.users.map(user =>
          <User key={user.id} nickname={user.nickname} current={this.props.currentUser} userId={user.id}/>
        )}
      </div>
    )
  }
}

export default UserWindow
