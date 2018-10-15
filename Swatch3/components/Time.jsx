import React from 'react';
import { getSeconds, getMinutes, getHours } from 'date-fns';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Time = ({ time }) => {
  console.log(typeof time);
  return (
    <div className="container text-center">
      <p>The current time is:</p>
      <div className="card-deck mb-3 text-center">
        <TimeUnit number={getHours(time)} />
        <TimeUnit number={getMinutes(time)} />
        <TimeUnit number={getSeconds(time)} />
      </div>
    </div>
  );
};

Time.propTypes = {
  time: PropTypes.number,
};

Time.defaultProps = {
  time: 0,

};

export default Time;
