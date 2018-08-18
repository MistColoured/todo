import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Time from './components/Time';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import firebase from './components/firebase';

class App extends Component {
  myUrl = 'https://5b5f35c58e9f160014b88dce.mockapi.io/api/events'

  state = {
    currentTime: moment(),
    eventList: [],
    event: '',
    date: '',
  }

  componentDidMount = () => {
    const eventRef = firebase.database().ref('eventList');
    eventRef.on('value', (snapshot) => {
      const newState = [];
      if (snapshot.exists()) {
        const items = snapshot.val();
        Object.entries(items).forEach(([key, val]) => {
          newState.push({
            id: key,
            event: val.event,
            date: val.date,
          });
        });
      }
      this.setState({
        eventList: newState,
      });
    });

    this.timerId = setInterval(() => {
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
    const { date, event, eventList } = this.state;
    const newPostKey = firebase.database().ref('eventList').push().key;
    const postObject = {
      date,
      event,
    };
    const eventObjectWrapper = {};
    eventObjectWrapper[newPostKey] = postObject;

    firebase.database().ref('eventList').update(eventObjectWrapper)
      .then(() => {
        eventList.push({
          id: newPostKey,
          date,
          event,
        });
        this.setState({
          eventList,
          date: '',
          event: '',
        });
      });


    axios.post(this.myUrl, eventObjectWrapper);
  }

  handleDeleteEvent = (id) => {
    const deleteRef = firebase.database().ref(`/eventList/${id}`);
    deleteRef.remove();
  }

  postNewEvent = (event, date) => {
    const postData = {
      event,
      date,
    };

    // Get a key for a new event.
    const newPostKey = firebase.database().ref().push().key;

    const updates = {};
    updates[`/dates/${newPostKey}`] = postData;

    firebase.database().ref().update(updates);
  }

  render() {
    const {
      eventList,
      currentTime,
      date,
      event,
    } = this.state;
    const displayEvents = eventList !== [];
    return (
      <div className="container-fluid">
        <div className="header">
          <SearchBar
            onInputChange={this.handleInputChange}
            onFormSubmit={this.handleFormSubmit}
            dateInput={date}
            eventInput={event}
          />
        </div>
        <div className="wrapper">
          <Time time={currentTime} message="Current time" />
          {displayEvents && (
          <EventList
            eventList={eventList}
            current={currentTime}
            onDelete={this.handleDeleteEvent}
          />
          )}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
