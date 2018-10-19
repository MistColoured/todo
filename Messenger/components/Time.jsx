import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const Time = ({ time }) => (
  <div className="container text-center">
    <div className="card-deck mb-3 text-center">
      {format(time, 'hh:mm:ss')}
    </div>
  </div>
);
Time.propTypes = {
  time: PropTypes.objectOf(Date),
};

Time.defaultProps = {
  time: {},

};

export default Time;
