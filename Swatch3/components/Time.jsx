import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Time = ({ time }) => (
  <div className="card-deck mb-3 text-center">
    <TimeUnit number={time.hours()} />
    <TimeUnit number={time.minutes()} />
    <TimeUnit number={time.seconds()} />
  </div>
);

Time.propTypes = {
  time: PropTypes.instanceOf(moment),
};

Time.defaultProps = {
  time: {},

};

export default Time;
