import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import InputFields from './Components/InputFields';
import NameList from './Components/NameList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="wrapper">
            <div className="list-title">List of participants</div>
            <InputFields />
            <NameList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//To get started, edit src/App.js and save to reload.