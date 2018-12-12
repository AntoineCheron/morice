import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './components/header';
import KindOfTechnologiesSelector from './components/kind-of-technologies-selector'
import { classifiedKindOfTechnologies } from './services/technology'
import './App.css';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content className='container'>
          <KindOfTechnologiesSelector
            kinds={classifiedKindOfTechnologies}
            onSave={ (selectedKinds) => alert('You selected ' + selectedKinds.join(', ')) }
          />
        </Content>
      </Layout>
    );
  }
}

export default App;
