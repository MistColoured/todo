import React, { Component } from 'react';
import Time from './components/Time';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Footer from './components/Footer';
import firebase, { auth, provider } from './components/firebase';

class App extends Component {
  state = {
    // currentTime: { hours: '11', minutes: '30', seconds: '1' },
    currentTime: new Date(),
    // messageList: [{ id: '34uy3hjk34h15', event: 'Mike event', date: '10/16/18 17:30' }],
    messageList: [],
    recipient: '',
    message: '',
    user: null,
  }

  componentDidMount = () => {
    // Add listener to auth user logging
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        const eventRef = firebase.database().ref(`users/${user.uid}/messageList`);
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
            // TODO Probably use a library to sort the data?
            // console.log('Sorting...', newState);
            // newState.sort((a, b) => a.date.localeCompare(b.date));
            // console.log('Sorted...', newState);
          }
          this.setState({
            messageList: newState,
          });
        });
      }
    });


    this.timerId = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  handleInputChange = (inputText, id) => {
    console.log('button', inputText, id);
    this.setState({
      [id]: inputText,
    });
  }

  handleFormSubmit = () => {
    const {
      recipient, message, messageList, user,
    } = this.state;
    const newPostKey = firebase.database().ref(`users/${user.uid}/messageList`).push().key;
    const postObject = {
      id: user.email,
      recipient,
      message,
    };
    const eventObjectWrapper = {};
    eventObjectWrapper[newPostKey] = postObject;

    firebase.database().ref(`users/${user.uid}/messageList`).update(eventObjectWrapper)
      .then(() => {
        messageList.push({
          id: newPostKey,
          recipient,
          message,
        });
        this.setState({
          messageList,
          recipient: '',
          message: '',
        });
      });
  }

  handleDeleteEvent = (id) => {
    const deleteRef = firebase.database().ref(`/messageList/${id}`);
    deleteRef.remove();
  }

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
      messageList,
      currentTime,
      recipient,
      message,
      user,
    } = this.state;
    const displayEvents = messageList !== [];
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
                <MessageInput
                  onInputChange={this.handleInputChange}
                  onFormSubmit={this.handleFormSubmit}
                  recipientInput={recipient}
                  messageInput={message}
                />
              </div>
              <div className="wrapper">
                <Time time={currentTime} message="Current time" />
                {displayEvents && (
                <MessageList
                  messageList={messageList}
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
