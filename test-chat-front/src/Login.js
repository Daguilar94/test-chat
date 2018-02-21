import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Grid, Row, Col} from 'react-bootstrap';

class Login extends Component {
  constructor(){
    super()
    this.addUser = this.addUser.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nickName: '',
      nickNameError: [],
      apiCallError: []
    }
  }

  addUser(e) {
    var self = this;
    e.preventDefault()
    axios({
      method: 'post',
      url: '/users',
      data: {
        nickname: this.state.nickName,
        room_id: 1
      }
    }).then(function (response) {
      console.log(response.data);
      if (response.data.errors !== undefined) {
        self.setState({
          nickNameError: [response.data.errors[0]]
        })
      } else {
        self.setState({
          nickName: '',
          nickNameError: []
        })
        browserHistory.push('/chat-room/' + response.data.id)
      }
    })
    .catch(function (error) {
      console.log(error);
      self.setState({
        apiCallError: error
      })
    });
  }

  getValidationState() {
    const length = this.state.nickName.length;
    if (length > 5) return 'success';
    else if (length > 0) return 'warning';
    return null;
  }

  handleChange(e) {
    this.setState({ nickName: e.target.value });
  }

  render() {
    return (
      <div className="login-container">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} smOffset={3}>
              <form className="text-center">
                <h1>Welcome to the Chat</h1>
                <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                  <ControlLabel>Enter an username</ControlLabel>
                  <FormControl type="text" value={this.state.nickName} placeholder="Enter text" onChange={this.handleChange}/>
                  <p className="error">{this.state.apiCallError[0]}</p>
                  <p className="error">{this.state.nickNameError[0]}</p>
                  <FormControl.Feedback />
                  <HelpBlock>Better if it has more than 5 characters</HelpBlock>
                </FormGroup>
                <Button type="submit" onClick={this.addUser}>Submit</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Login;
