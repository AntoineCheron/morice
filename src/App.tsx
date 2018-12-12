import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './components/header'
import AppContent from './components/content'

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <AppContent />
      </Layout>
    );
  }
}

export default App;
