import React, { Component } from 'react';
import moment from 'moment';
import Time from './components/Time';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import firebase, { auth, provider } from './components/firebase';

class App extends Component {
  state = {
    currentTime: moment(),
    eventList: [],
    event: '',
    date: '',
    user: null,
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user:', user);
        this.setState({ user });
      }
    });

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
    const {
      date, event, eventList, user,
    } = this.state;
    const newPostKey = firebase.database().ref('eventList').push().key;
    const postObject = {
      id: user.email,
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
  }

  handleDeleteEvent = (id) => {
    const deleteRef = firebase.database().ref(`/eventList/${id}`);
    deleteRef.remove();
  }

  // postNewEvent = (event, date) => {
  //   const postData = {
  //     event,
  //     date,
  //   };

  //   // Get a key for a new event.
  //   const newPostKey = firebase.database().ref().push().key;

  //   const updates = {};
  //   updates[`/dates/${newPostKey}`] = postData;

  //   firebase.database().ref().update(updates);
  // }


  login = () => {
    auth.signInWithPopup(provider)
    // Destructuring user from result.user
      .then(({ user }) => {
        this.setState({
          user,
        });
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        });
      });
  }

  render() {
    const {
      eventList,
      currentTime,
      date,
      event,
      user,
    } = this.state;
    const displayEvents = eventList !== [];
    return (
      <div className="container-fluid">
        <div>
          {user
            ? <button onClick={this.logout}>Log Out {user.email}</button>
            : <button onClick={this.login}>Log In</button>
  }
        </div>
        { user
          ? (
            <div>
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
          )
          : <div><p>Need to log in</p></div>
        }
      </div>

    );
  }
}

export default App;
