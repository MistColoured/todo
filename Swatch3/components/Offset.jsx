import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Offset = ({ time }) => (
  <div className="card-deck mb-3 text-center">
    <TimeUnit number={moment.duration(time).asDays()} unit="day" />
    <TimeUnit number={moment.duration(time).hours()} unit="hour" />
    <TimeUnit number={moment.duration(time).minutes()} unit="min" />
    <TimeUnit number={moment.duration(time).seconds()} unit="sec" />
  </div>
);

Offset.propTypes = {
  time: PropTypes.number,
};

Offset.defaultProps = {
  time: 0,
};
export default Offset;
