import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Login from './Login.js';
import Room from './Room.js';
import NotFound from './NotFound.js'

class Main extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRedirect to='/login' />
          <Route path='/login' component={Login} />
          <Route path='/chat-room/:id' component={Room} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
