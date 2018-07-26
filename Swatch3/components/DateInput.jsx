import React, { Component } from 'react';
// import moment from 'moment';
import Input from './Input';

export default class DateUntil extends Component {
  render() {
    const { dateUntil } = this.props;
    return (
      <div>
        <Input />
      </div>
    );
  }
}
