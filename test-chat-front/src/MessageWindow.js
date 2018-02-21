import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message.js';
import InputArea from './InputArea.js';
import './MessageWindow.css'

class MessageWindow extends Component {
  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    this.state = {
      messages: [],
      apiCallError: []
    }

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

  addMessage(e, currentMessage) {
    var self = this;
    e.preventDefault()
    axios({
      method: 'post',
      url: '../rooms/1/messages',
      data: {
        content: currentMessage,
        room_id: 1,
        user_id: this.props.currentUser
      }
    }).then(function (response) {
      console.log(response.data);
      if (response.data.errors === undefined) {
        self.setState({
          messages: self.state.messages.concat(response.data)
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div className='message-group'>
        <div className='message-container'>
          {this.state.messages.map(message =>
            <Message key={message.id} user={message.user} content={message.content} userId={this.props.currentUser}/>
          )}
        </div>
        <div>
          <InputArea addMessage={this.addMessage}/>
        </div>
      </div>
    )
  }

}

export default MessageWindow
