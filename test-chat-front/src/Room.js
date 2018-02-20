import React, { Component } from 'react';
import axios from 'axios'

class Room extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      messages: []
    }

    axios.get("/rooms/1/users")
    .then(response => {
      console.log(response.data);
      this.setState({
        users: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })

    axios.get("/rooms/1/messages")
    .then(response => {
      console.log(response.data);
      this.setState({
        messages: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })


  }

  render() {
    return(
      <div>
        {/* {this.state.users.map(user =>
          <p key={user.id}>{user.nickname}</p>
        )} */}

        {this.state.messages.map(message =>
          <div>
          <p key={message.id}>{message.user.nickname}</p>
          <p>{message.content}</p>
          <br/>
          </div>
        )}
      </div>
    )
  }
}

export default Room;
