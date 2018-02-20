import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super()
    this.addUser = this.addUser.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      users: [],
      nickName: '',
      nickNameError: [],
      apiCallError: []
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
          nickNameError: [],
          users: self.state.users.concat(response.data)
        })
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
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={6} smOffset={3}>
            <form className="text-center">
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
        {this.state.users.map(user =>
          <p key={user.id}>{user.nickname}</p>
        )}
      </Grid>
    )
  }
}

export default App;
