import React, { Component } from 'react';
import Time from './components/Time';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';
import Footer from './components/Footer';
import firebase, { auth, provider } from './components/firebase';

class App extends Component {
  state = {
    currentTime: new Date(),
    todoList: [],
    todo: '',
    embedLevel: '',
    user: null,
  }

  componentDidMount = () => {
    // Add listener to auth user logging
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.loadData();
      }
    });


    // this.timerId = setInterval(() => {
    //   this.setState({
    //     currentTime: new Date(),
    //   });
    // }, 1000);
  }

  loadData = () => {
    const { user, embedLevel } = this.state;
    const eventRef = firebase.database().ref(`users/${user.uid}/todoList/${embedLevel}`);
    eventRef.once('value', (snapshot) => {
      const newState = [];
      if (snapshot.exists()) {
        const items = snapshot.val();
        console.log('items', items);
        Object.entries(items).forEach(([key, val]) => {
          if (key !== 'todo') {
            newState.push({
              id: key,
              todo: val.todo,
            });
          }
        });
        // TODO Probably use a library to sort the data?
        // console.log('Sorting...', newState);
        // newState.sort((a, b) => a.date.localeCompare(b.date));
        // console.log('Sorted...', newState);
      }
      this.setState({
        todoList: newState,
      });
    });
  }

  clickToDo = (id) => {
    const { embedLevel } = this.state;
    // console.log('Clicked an event', embedLevel.concat('/', id));
    this.setState({
      embedLevel: embedLevel.concat('/', id),
    },
    () => this.loadData());
    console.log('Data loaded');
  }

  handleInputChange = (inputText, id) => {
    // console.log('button', inputText, id);
    this.setState({
      [id]: inputText,
    });
  }

  handleFormSubmit = () => {
    const {
      todo, todoList, user, embedLevel,
    } = this.state;
    const newPostKey = firebase.database().ref(`users/${user.uid}/todoList${embedLevel}`).push().key;
    const postObject = {
      todo,
    };
    const eventObjectWrapper = {};
    eventObjectWrapper[newPostKey] = postObject;

    firebase.database().ref(`users/${user.uid}/todoList/${embedLevel}`).update(eventObjectWrapper)
      .then(() => {
        todoList.push({
          id: newPostKey,
          todo,
        });
        this.setState({
          todoList,
          todo: '',
        });
      });
  }

  handleDeleteEvent = (id) => {
    const deleteRef = firebase.database().ref(`/todoList/${id}`);
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
      todoList,
      currentTime,
      todo,
      user,
    } = this.state;
    const displayEvents = todoList !== [];
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
                <ToDoInput
                  onInputChange={this.handleInputChange}
                  onFormSubmit={this.handleFormSubmit}
                  todoInput={todo}
                />
              </div>
              <div className="wrapper">
                <Time time={currentTime} message="Current time" />
                {displayEvents && (
                <ToDoList
                  todoList={todoList}
                  clickToDo={this.clickToDo}
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
