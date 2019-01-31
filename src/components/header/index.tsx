import React, { SFC } from 'react';

import { Layout, Button, Col, Row } from 'antd';
const { Header } = Layout;

import { appContentStatePersistor } from '../../services/state-persistor';

const AppHeader: SFC = () => (
  <Header>
    <Row className='ant-row-no-padding'>
      <Col span={8}><Button type="primary" onClick={() => resetAppContentStateAndReload()}>Restart</Button></Col>
      <Col span={8} className='center'><h2 className='brand-title'>Morice</h2></Col>
      <Col span={8}>col-8</Col>
    </Row>
  </Header>
)

function resetAppContentStateAndReload(): void {
  appContentStatePersistor.reset();
  location.reload();
}

export default AppHeader;