import React from 'react';
// eslint-disable-next-line
import moment from 'moment';
import PropTypes from 'prop-types';

import TimeUnit from './TimeUnit';

const Offset = ({ time, item: { eventName, eventDate, id }, onDelete }) => (
  <div className="container text-center">
    <p>
      {eventName} (
      {moment(eventDate).format('ddd, D MMMM')})
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

Offset.propTypes = {
  time: PropTypes.number,
  item: PropTypes.shape({
    eventName: PropTypes.string,
    eventDate: PropTypes.string,
    id: PropTypes.number,
  }),
  onDelete: PropTypes.func,
};

Offset.defaultProps = {
  time: 0,
  item: PropTypes.shape({
    eventName: '',
    eventDate: '',
    id: 0,
  }),
  onDelete() {},
};
export default Offset;
