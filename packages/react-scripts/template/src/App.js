import React, { Component } from 'react';
import './App.css';
import { conf } from './conf.js';
import Layout from 'nodewire';
import dashboard from './dashboard.html';
import { data } from 'nodewire';

console.log(data);

class App extends Component {
  render() {
    return <Layout layout={dashboard} format="xml" conf={conf} />;
  }
}

export default App;
