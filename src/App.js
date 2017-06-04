import React, { Component } from 'react';
import './App.css';
import InputFields from './Components/InputFields';
import NameList from './Components/NameList';

const data_file = './data.json';

class App extends Component {
  constructor(props) {
    super(props)

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.sortPersons = this.sortPersons.bind(this);

    this.state = { persons: [], sortAlphabetically: true };
  }

  componentDidMount() {
    this.ajaxRequest(data_file, (persons) => {

      this.setState({ persons: persons.Rows });
     });
  };

  ajaxRequest(file, callback) {
      const httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          const response = JSON.parse(httpRequest.responseText);

          callback(response);
        }
      };
      httpRequest.open('GET', file);
      httpRequest.send();
  }

  addPerson(newPerson) {
    if (newPerson.name === "" || newPerson.e_mail === "" || newPerson.phone === "") { return; }
    const newPersons = this.state.persons.concat([newPerson]);
    this.setState({ persons: newPersons });
  }

  sortPersons() {
    const sortAlphabetically = this.state.sortAlphabetically;
    const tempPersons = this.state.persons;

    tempPersons.sort((sample1, sample2) => {
      const a = sample1.name.toLowerCase();
      const b = sample2.name.toLowerCase();
      
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    });
    
    if (sortAlphabetically === true) {
      this.setState({ persons: tempPersons, sortAlphabetically: false });
    }
    else {
      tempPersons.reverse();
      this.setState({ persons: tempPersons, sortAlphabetically: true });
    }
  }

  deletePerson(idx) {
    const newPersons = this.state.persons.filter(name => name.id !== idx);
    this.setState({ persons: newPersons });
  }

  render() {
    return (
      <div className="App">
          <div className="container">
          <div className="wrapper">
            <div className="list-title">List of participants</div>
            <InputFields
              onFormSubmit={this.addPerson} 
            />
            <NameList
             persons={ this.state.persons }
             onNameColumnClick={this.sortPersons}
             deletingPerson={this.deletePerson}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//To get started, edit src/App.js and save to reload.