import React from 'react';

import { Layout } from 'antd';

import KindOfTechnologiesSelector from '../kind-of-technologies-selector'
import { classifiedKindOfTechnologies } from '../../services/technology'

const { Content } = Layout;

class AppContent extends React.Component {

  public render() {
    return (
      <Content className='container'>
        <KindOfTechnologiesSelector
          kinds={classifiedKindOfTechnologies}
          onSave={ (selectedKinds) => alert('You selected ' + selectedKinds.join(', ')) }
        />
      </Content>
    );
  }
  
}

export default AppContent;