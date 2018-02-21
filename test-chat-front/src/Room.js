import React, { Component } from 'react';
import MessageWindow from './MessageWindow.js';
import UserWindow from './UserWindow.js';
import {Grid, Row, Col} from 'react-bootstrap';
import './Room.css'
import './index.css'

class Room extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: this.props.params.id
    }
  }

  render() {
    return(
      <div className="container-fluid">
        <Grid>
          <Row className="show-grid">
            <Col sm={2} className="hidden-xs text-center users-list-container margin-1-2em-0">
              <h2><strong>Members</strong></h2>
              <UserWindow currentUser={this.state.currentUser}/>
            </Col>
            <Col sm={10} xs={12} className='messages-group-container margin-1-2em-0'>
              <MessageWindow currentUser={this.state.currentUser}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Room;
