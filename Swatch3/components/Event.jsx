import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Event = ({ time, event: { date, event, id }, onDelete }) => {
  console.log('timer', time);
  return (
    <div className="container text-center">
      <p>
        {event} ({format(date, 'DD MMMM YYYY hh:mm:ss')})
        <button id={id} onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </p>
      <div className="card-deck mb-3 text-center">
        <TimeUnit number={parseInt(time / 86400, 10)} unit="day" />
        <TimeUnit number={parseInt(time / 3600, 10) % 24} unit="hour" />
        <TimeUnit number={parseInt(time / 60, 10) % 60} unit="min" />
        <TimeUnit number={time % 60} unit="sec" />
      </div>
    </div>
  );
};

Event.propTypes = {
  time: PropTypes.number,
  event: PropTypes.shape({
    event: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

Event.defaultProps = {
  time: 0,
  event: PropTypes.shape({
    event: '',
    date: '',
    id: '',
  }),
  onDelete() {},
};
export default Event;
