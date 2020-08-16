import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import NavBar from './navbar';
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NewUserForm from './newuserform';

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
    </div>
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/NewUserForm">
          <NewUserForm />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
