import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Delta = ({ time }) => (
  <div className="card-deck mb-3 text-center">
    <TimeUnit number={moment.duration(time).asDays()} unit="day" />
    <TimeUnit number={moment.duration(time).hours()} unit="hour" />
    <TimeUnit number={moment.duration(time).minutes()} unit="min" />
    <TimeUnit number={moment.duration(time).seconds()} unit="sec" />
  </div>
);

Delta.propTypes = {
  time: PropTypes.number,
};

Delta.defaultProps = {
  time: 0,
};
export default Delta;
