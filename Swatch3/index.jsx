import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Time from './components/Time';
import OffsetList from './components/OffsetList';
import SearchBar from './components/SearchBar';

class App extends Component {
  myUrl = 'https://5b5f35c58e9f160014b88dce.mockapi.io/api/eventDates'

  state = {
    currentTime: moment(),
    eventDates: [],
    eventInput: '',
    dateInput: '',
  }

  componentDidMount = () => {
    axios.get(this.myUrl)
      .then((res) => {
        this.setState({
          eventDates: res.data,
        });
      });
    this.timerId = setInterval(() => {
      const { eventInput, dateInput } = this.state;
      console.log('in timer', eventInput, dateInput);
      this.setState({
        currentTime: moment(),
      });
    }, 1000);
  }

  handleInputChange = (inputText, id) => {
    this.setState({
      [id]: inputText,
    });
  }

  handleFormSubmit = () => {
    const { dateInput, eventInput, eventDates } = this.state;
    const eventObject = {
      eventDate: moment(dateInput),
      eventName: eventInput,
    };
    axios.post(this.myUrl, eventObject)
      .then((res) => {
        eventDates.push(res.data);
        this.setState({
          eventDates,
          dateInput: '',
          eventInput: '',
        });
      });
  }

  render() {
    const {
      eventDates,
      currentTime,
      dateInput,
      eventInput,
    } = this.state;
    return (
      <div className="container text-center">
        <SearchBar
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
          dateInput={dateInput}
          eventInput={eventInput}
        />
        <Time time={currentTime} message="Current time" />
        <OffsetList offsets={eventDates} current={currentTime} />
      </div>
    );
  }
}

export default App;
