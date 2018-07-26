import React, { Component } from 'react';
import moment from 'moment';
import Time from './components/Time';
import Delta from './components/Delta';
import NewDate from './components/NewDate';

class App extends Component {
  state = {
    currentTime: moment(),
    dateUntil: moment('17 Aug 2018'),
    delta: this.getDelta,
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: moment(),
        delta: this.getDelta(),
      });
    }, 1000);
  }

  getDelta = () => {
    const { currentTime, dateUntil } = this.state;
    return dateUntil.diff(currentTime);
  }

  render() {
    const { delta, currentTime } = this.state;
    return (
      <div className="container">
        <Time time={currentTime} message="Current time" />
        <Delta time={delta} />
        <NewDate />
      </div>
    );
  }
}

export default App;
