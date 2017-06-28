import React, { Component } from 'react';
import './App.css';
import InputFields from './Components/InputFields';
import NameList from './Components/NameList';

const url = 'https://randomuser.me/api/?results=7';

class App extends Component {
  constructor(props) {
    super(props);

    this.addPerson = this.addPerson.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.sortPersons = this.sortPersons.bind(this);
    this.editPerson = this.editPerson.bind(this);
    this.discardEdit = this.discardEdit.bind(this);
    
    this.state = { 
      persons: [],
      changeArrowDirection: true,
      editingId: null,
      sortBy: 'name',
    };
  }

  componentDidMount() {

    this.ajaxRequest(url, (data) => {
      const parsedData = data.results.map((result) => {
        const wholeName = `${result.name.first} ${result.name.last}`; 
        return {
          id: result.dob,
          name: wholeName,
          email: result.email,
          phone: result.cell
        }
      });
      this.setState({ persons: parsedData });
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
    const newPersons = this.state.persons.concat([newPerson]);
    this.setState({ persons: newPersons });
  }

  sortPersons(feature) {
    const tempPersons = this.state.persons;

    const sortedPersons = tempPersons.sort((sample1, sample2) => {
      const a = sample1[feature].toLowerCase();
      const b = sample2[feature].toLowerCase();
      
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    });
    
    if (feature === this.state.sortBy) {
      if (this.state.changeArrowDirection === 'up') {
        this.setState({ persons: sortedPersons, changeArrowDirection: 'down', sortBy: feature });
      } 
      else {
        this.setState({ persons: sortedPersons, changeArrowDirection: 'up', sortBy: feature });
      }
    }
    else {
      sortedPersons.reverse();
      this.setState({ persons: sortedPersons, changeArrowDirection: 'down', sortBy: feature }); 
    }
  }

  showEditForm(personId) {
    const person = this.state.persons.find((person) => person.id === personId);

    this.setState({ editingId: person.id });
  }

  editPerson(editedData) {
    const editedPersons = this.state.persons.map((person) => {
      if (editedData.id === person.id) {
        return {
          id: editedData.id,
          name: editedData.name,
          email: editedData.email,
          phone: editedData.phone
        };
      } else {
        return person;
      }
    });
    this.setState({ persons: editedPersons, editingId: null }); 
  }

  discardEdit() {
    this.setState({ editingId: null }); 
  }

  deletePerson(personId) {
    const newPersons = this.state.persons.filter(person => person.id !== personId);
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
              onDataColumnClick={this.sortPersons}
              deletingPerson={this.deletePerson}
              editingPerson={this.showEditForm}
              changeArrowDirection={this.state.changeArrowDirection}
              sortBy={this.state.sortBy}
              editingId={this.state.editingId}
              onEditFormSubmit={this.editPerson}
              onDiscardButtonClick={this.discardEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//To get started, edit src/App.js and save to reload.