import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Time = ({
  time,
  format,
  message,
}) => (
  <h2>
      {`${message}: ${time.format(format)}`}
    </h2>
);

Time.propTypes = {
  time: PropTypes.instanceOf(moment),
  format: PropTypes.string,
  message: PropTypes.string,
  displayDays: PropTypes.bool,
};

Time.defaultProps = {
  time: {},
  format: 'HH mm:ss',
  message: '',
  displayDays: false,
};
export default Time;
