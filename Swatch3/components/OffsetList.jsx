import React, { Component } from 'react';

import Offset from './Offset';

class OffsetList extends Component {
  getDelta = (offset, current) => offset.diff(current)

  render() {
    const { offsets, currentTime } = this.props;
    return (
      <div>{
        offsets.map(elem => (
          <Offset time={this.getDelta(elem, currentTime)} />
        ))
      }
      </div>

    );
  }
}

export default OffsetList;
