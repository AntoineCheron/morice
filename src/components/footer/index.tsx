import React, { SFC } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter: SFC = () => (
  <Footer className='center l-padding-top' style={{ marginBottom: 0, marginTop: 24 }}>
    Created to be helpful and shared - by <a className='link-no-format text-bold' href="http://technologies.fabernovel.com/fr/">// FABERNOVEL</a> & <a className='link-no-format text-bold' href="http://www.diverse-team.fr/">DiverSE team from IRISA</a> - <a href="mailto:antoine.cheron@fabernovel.com">feedbacks by email are welcome</a>
  </Footer>
)

export default AppFooter;