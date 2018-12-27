import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import NotFound from './components/not-found';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
      
        <Header />

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={() => <Redirect to='/step' />} />
            <Route path="/step/:step" component={Content} />
            <Route path="/step" component={Content} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

        <Footer />
        
      </Layout>
    );
  }
}

export default App;
