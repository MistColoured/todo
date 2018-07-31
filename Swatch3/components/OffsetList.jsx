import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Offset from './Offset';

class OffsetList extends Component {
  getDelta = (offset, current) => offset.diff(current)

  render() {
    const { offsets, currentTime } = this.props;
    return (
      <div>{
        offsets.map(elem => (
          <Offset time={this.getDelta(moment(elem.time), currentTime)} />
        ))
      }
      </div>

    );
  }
}

OffsetList.propTypes = {
  offsets: PropTypes.arrayOf(Object),
  // TODO: Check if this should be PropTypes.string or not.
  currentTime: PropTypes.objectOf(PropTypes.string),
};

OffsetList.defaultProps = {
  offsets: [{}],
  currentTime: {},
};

export default OffsetList;
