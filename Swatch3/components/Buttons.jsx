import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Buttons = ({ value }) => (
  <Button inverted color="red">
    {value}
  </Button>
);

Buttons.propTypes = {
  value: PropTypes.number,
};

Buttons.defaultProps = {
  value: 0,
};
export default Buttons;
