import React, { SFC } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter: SFC = () => (
  <Footer className='center' style={{ marginBottom: 0 }}>
    Created to be helpful and shared - <a href="mailto:antoine.cheron@fabernovel.com">feedbacks are welcome</a>
  </Footer>
)

export default AppFooter;