import React, { SFC } from 'react';

import { Layout } from 'antd';
const { Header } = Layout;

const AppHeader: SFC = () => (
  <Header className='center'>
    <h2 className='brand-title'>Morice</h2>
  </Header>
)

export default AppHeader;