import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO Work out why object in PropTypes is forbidden.
export default class Toggle extends Component {
  state = {
    show: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { render } = this.props;
    const { show } = this.state;
    return (
      <div>
        {render({
          show,
          toggle: this.handleToggle,
        })}
      </div>
    );
  }
}

Toggle.propTypes = {
  render: PropTypes.object,
};

Toggle.defaultProps = {
  render: {},
};
