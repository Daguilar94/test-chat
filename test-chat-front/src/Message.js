import React, { Component } from 'react';
import './index.css';
import './Message.css'

class Message extends Component {

  render() {
    return(
      <div className={this.props.user.id == this.props.userId? 'message message--own': 'message message--others'}>
        <span><strong>{this.props.user.nickname}</strong></span>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Message
