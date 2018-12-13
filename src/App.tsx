import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import AppContent from './components/content';
import Header from './components/header';
import NotFound from './components/not-found';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Redirect to='/step' />} />
            <Route path="/step/:step" component={AppContent} />
            <Route path="/step" component={AppContent} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        
      </Layout>
    );
  }
}

export default App;
