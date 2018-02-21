import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './index.css'

class InputArea extends Component {
  constructor(props) {
    super(props)
    this.cleanInput = this.cleanInput.bind(this)
    this.updateArea = this.updateArea.bind(this)
    this.state = {
      currentMessage: ''
    }
  }

  updateArea(e) {
    this.setState({
      currentMessage: e.target.value
    })
  }

  cleanInput() {
    this.setState({
      currentMessage: ''
    })
  }

  render() {
    return(
      <div className="margin-top-1em text-right">
        <form onSubmit={(e) => {this.props.addMessage(e, this.state.currentMessage); this.cleanInput(e);}}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder="Write what you are thinking!" value={this.state.currentMessage} onChange={this.updateArea}/>
          </FormGroup>
          <Button type="submit" bsStyle="primary">Send</Button>
        </form>
      </div>
    )
  }
}

export default InputArea
