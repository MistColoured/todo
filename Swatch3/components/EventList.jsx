import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';

import Event from './Event';

class EventList extends Component {
  getDelta = (event, current) => event.diff(current)

  render() {
    const { eventList, time, onDelete } = this.props;
    return (
      <div>{
        eventList.map(event => (
          <Event
            key={event.id}
            event={event}
            onDelete={onDelete}
            time={differenceInSeconds(event.date, time)}
          />
        ))
      }
      </div>

    );
  }
}

EventList.propTypes = {
  eventList: PropTypes.arrayOf(Object),
  time: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

EventList.defaultProps = {
  eventList: [{}],
  time: 0,
};

export default EventList;
