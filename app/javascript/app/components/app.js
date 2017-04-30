import React, { Component } from 'react';
import { connect } from 'react-redux';


export class App extends Component {
  render() {
    return (
      <h1>Rails 5.1 - React 15.5 Boilerplate</h1>
    )
  }
}

export default connect()(App);