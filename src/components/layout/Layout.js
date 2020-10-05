import React from 'react';
import Tabs from '../tabs';
import { Content } from './Layout.styles';

const Layout = ({ children }) => (
  <>
    <Tabs />
    <Content>
      {children}
    </Content>
  </>
);

export default Layout;
