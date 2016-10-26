import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Layout from './layout/Layout';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="home"/>
      <Route path="editar"/>
      <Route path="sobre"/>
    </Route>
  </Router>,
  document.getElementById('root')
);
