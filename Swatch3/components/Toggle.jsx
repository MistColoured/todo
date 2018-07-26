import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Toggle extends Component {
  state = {
    show: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
      count: 1,
    }));
  }

  handleCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { render } = this.props;
    const { show, count } = this.state;
    return (
      <div>
        Count: {count}
        {render({
          show,
          toggle: this.handleToggle,
          increase: this.handleCount,
        })}
      </div>
    );
  }
}
