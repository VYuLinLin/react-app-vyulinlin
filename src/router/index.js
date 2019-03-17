import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom'

export default class RouterView extends Comment {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="router-view">
        <Router>
          <Route path="/home" component={() => import(/* webpackChunkName: "index" */ '@/Index')}></Route>
        </Router>
      </div>
    )
  }
}