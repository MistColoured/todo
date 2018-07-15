import React from 'react';
import { Container } from 'semantic-ui-react';
import Buttons from './Buttons';

const Layout = () => (
  <div>
    <Container align="center">
      <Buttons className="ui purple button" value={10} />
      <Buttons className="ui purple button" value={10} />
      <Buttons className="ui purple button" value={20} />
      <Buttons className="ui purple button" value={30} />
    </Container>
  </div>
);

export default Layout;
