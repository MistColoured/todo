import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Buttons = ({ value }) => (
  <Button bsStyle="info">{value}</Button>
);

Buttons.propTypes = {
  value: PropTypes.number,
};

Buttons.defaultProps = {
  value: 0,
};
export default Buttons;
