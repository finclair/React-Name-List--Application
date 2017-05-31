import React, { Component } from 'react';
import './App.css';
import InputFields from './Components/InputFields';
import NameList from './Components/NameList';

const data_file = './data.json';


class App extends Component {
  constructor(props) {
    super(props)

    this.addName = this.addName.bind(this);
    this.deleteName = this.deleteName.bind(this);
    this.sortNames = this.sortNames.bind(this);

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

          callback(response);
        }
      };
      httpRequest.open('GET', file);
      httpRequest.send();
  }

  addName(newName) {
    if (newName.name === "" || newName.e_mail === "" || newName.phone === "") { return; }
    const newNames = this.state.names.concat([newName]);
    this.setState({ names: newNames });
  }

  sortNames() {
    
    const tempNames = this.state.names;
    
    function compareNames(a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      console.log(1 + " " + a);
      console.log(2 + " " + b);

      return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    tempNames.sort((a, b) => {
      return compareNames(a.name, b.name);
    }); 
    this.setState({ names: tempNames });

  }

  deleteName(idx) {
    const newNames = this.state.names.filter(name => name.id !== idx);
    this.setState({ names: newNames });
  }

  render() {
    return (
      <div className="App">
          <div className="container">
          <div className="wrapper">
            <div className="list-title">List of participants</div>
            <InputFields
              addingName={this.addName} 
            />
            <NameList
             names={ this.state.names }
             sortingNames={this.sortNames}
             deletingName={this.deleteName}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//To get started, edit src/App.js and save to reload.