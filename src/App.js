import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageView from './messages/message-view';
import MessgeList from './messages/message-list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>
            This is the first change I made.
        </p>
        </div>
        <div>
          <hr />
          {/* <MessageView /> */}
          <MessgeList />
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
