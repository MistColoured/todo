
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Event from './Event';

class EventList extends Component {
  getDelta = (event, current) => event.diff(current)

  render() {
    const { eventList, current, onDelete } = this.props;
    return (
      <div>{
        eventList.map(event => (
          <Event
            key={event.id}
            event={event}
            onDelete={onDelete}
            time={this.getDelta(moment(event.date), current)}
          />
        ))
      }
      </div>

    );
  }
}

EventList.propTypes = {
  eventList: PropTypes.arrayOf(Object),
  current: PropTypes.objectOf(PropTypes.string),
  onDelete: PropTypes.func.isRequired,
};

EventList.defaultProps = {
  eventList: [{}],
  current: {},
};

export default EventList;
