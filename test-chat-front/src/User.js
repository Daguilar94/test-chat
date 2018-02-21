import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='text-left'>
        <p>{this.props.current == this.props.userId ? <strong>{this.props.nickname}</strong> : this.props.nickname}</p>
      </div>
    )
  }
}

export default User
