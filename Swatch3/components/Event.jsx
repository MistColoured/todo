import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Event = ({ time, event: { date, event, id }, onDelete }) => (
  <div className="container text-center">
    <p>
      {event} ({moment(date).format('ddd, D MMMM YYYY')})
      <button id={id} onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
    </p>
    <div className="card-deck mb-3 text-center">
      <TimeUnit number={moment.duration(time).asDays()} unit="day" />
      <TimeUnit number={moment.duration(time).hours()} unit="hour" />
      <TimeUnit number={moment.duration(time).minutes()} unit="min" />
      <TimeUnit number={moment.duration(time).seconds()} unit="sec" />
    </div>
  </div>
);

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
