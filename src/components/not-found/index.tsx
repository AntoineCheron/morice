import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

class NotFound extends Component {
  render() {
    return (
      <Layout className='center'>
        <p>Oops, we could not find this page.</p>
        <p>Try going back to <Link to='/'>home</Link>.</p>
      </Layout>
    );
  }
}

export default NotFound;
