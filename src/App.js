import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import InputFields from './Components/InputFields';
import NameList from './Components/NameList';

const data_file = './data.json';


class App extends Component {
  constructor(props) {
    super(props)

    this.addName = this.addName.bind(this);

    this.state = { names: [] };
  }

  componentDidMount() {
    this.renderNames(data_file, (names) => {

      this.setState({ names: names.Rows });
     });
  };

  renderNames(file, callback) {
      const httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          const response = JSON.parse(httpRequest.responseText);
          console.log(response.Rows[0].name);
          callback(response);
        }
      };
      httpRequest.open('GET', file);
      httpRequest.send();
  }

  addName(newName) {
    if (newName.name == "" || newName.e_mail == "" || newName.phone == "") { return; }
    const newNames = this.state.names.concat([newName]);
    this.setState({ names: newNames });
    
  }

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
            <InputFields
              addingName={this.addName} 
            />
            <NameList names={ this.state.names }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//To get started, edit src/App.js and save to reload.