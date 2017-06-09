import React, { Component } from 'react';
import './App.css';
import InputFields from './Components/InputFields';
import NameList from './Components/NameList';
import EditingForm from './Components/EditingForm';

const data_file = './data.json';

class App extends Component {
  constructor(props) {
    super(props)

    this.addPerson = this.addPerson.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.sortPersons = this.sortPersons.bind(this);
    this.editPerson = this.editPerson.bind(this);
    
    this.state = { 
      persons: [],
      sortAlphabetically: true,
      isEditing: false,
    };
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

  showEditForm(idx) {
    if (this.state.isEditing) { return; }

    const person = this.state.persons.filter(person => person.id === idx);
  
    this.setState({ idEdit: person[0].id });
    this.setState({ nameEdit: person[0].name });
    this.setState({ emailEdit: person[0].e_mail });
    this.setState({ phoneEdit: person[0].phone });

    const newPersons = this.state.persons.filter(person => person.id !== idx);
    this.setState({persons: newPersons});
    this.setState({ isEditing: true });
  }

  editPerson(editedData) {

      const newPersons = this.state.persons.concat([editedData]);
      this.setState({ persons: newPersons });
      this.setState({ isEditing: false }); 
  }

  deletePerson(idx) {
    const newPersons = this.state.persons.filter(person => person.id !== idx);
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
            {this.state.isEditing && <EditingForm
              idEdit={this.state.idEdit}
              nameEdit={this.state.nameEdit}
              emailEdit={this.state.emailEdit}
              phoneEdit={this.state.phoneEdit}
              onEditFormSubmit={this.editPerson} 
            />}
            <NameList
             persons={ this.state.persons }
             onNameColumnClick={this.sortPersons}
             deletingPerson={this.deletePerson}
             showEditForm={this.showEditForm}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//To get started, edit src/App.js and save to reload.