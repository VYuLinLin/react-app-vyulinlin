import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '@/views/home'

export default class RouterView extends Component {
  render() {
    return (
      <div className="router-view">
        <Router>
          <Route path="/" component={Home}></Route>
        </Router>
      </div>
    )
  }
}