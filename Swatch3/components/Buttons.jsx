import React from 'react';
import { Button } from 'semantic-ui-react';

const Buttons = ({ value }) => (
  <Button inverted color="blue">
    Blue {value}
  </Button>
);

export default Buttons;
