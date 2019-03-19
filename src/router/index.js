import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './index.css'
import Home from '@/views/home'
import Page1 from '@/views/pages/page1'

export default class RouterView extends Component {
  render() {
    return (
      <div className="router-view">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/page1" component={Page1}></Route>
        </Switch>
      </div>
    )
  }
}