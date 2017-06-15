import React, {Component} from 'react';

class NameListItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: props.person.id,
      name: props.person.name,
      e_mail: props.person.e_mail,
      phone: props.person.phone,
    }
    this.editingPerson = this.editingPerson.bind(this);
    this.deletingPerson = this.deletingPerson.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);

  }
  
  componentWillReceiveProps(newprops) {
    this.setState({
      id: newprops.person.id,
      name: newprops.person.name,
      e_mail: newprops.person.e_mail,
      phone: newprops.person.phone,
    })
  }

  editingPerson() {
    this.props.editingPerson(this.state.id);
  }

  deletingPerson() {
    this.props.deletingPerson(this.state.id);
  }

  onEditFormSubmit(event) {
    event.preventDefault();
    if (this.state.name === "" || this.state.e_mail === "" || this.state.phone === "") { return; }
    this.props.onEditFormSubmit(this.state);
  }

  onNameInputChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailInputChange(event) {
    this.setState({ e_mail: event.target.value });
  }
  onPhoneInputChange(event) {
    this.setState({ phone: event.target.value });
  }

  render() {
    return (
      <div>
      {this.state.id === this.props.editingId ? 
            <form className="form-edit" onSubmit={this.onEditFormSubmit}>
              <div className="row">
                <input
                  className="input-field col-sm-2" 
                  value={this.state.name}
                  onChange={this.onNameInputChange} 
                />
                <input className="input-field col-sm-3" 
                  value={this.state.e_mail}
                  onChange={this.onEmailInputChange} 
                />
                <input className="input-field col-sm-2"  
                  value={this.state.phone}
                  onChange={this.onPhoneInputChange}
                />
                <button className="button-save-changes">
                  <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true" />
                </button>
                <button onClick={this.props.onDiscardButtonClick} className="button-discard-changes" type="button">
                  <span className="glyphicon glyphicon-trash" aria-hidden="true" />
                </button>
              </div>
            </form> : <div className="row person">
          <div className="name-column">{this.state.name}</div>
          <div className="mail-column">{this.state.e_mail}</div>
          <div className="phone-column">{this.state.phone}</div>
          <div className="buttons-column">
            <button onClick={this.editingPerson} className="button-modify">
              <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
            </button>
            <button onClick={this.deletingPerson} className="button-delete">
              <span className="glyphicon glyphicon-remove" aria-hidden="true" />
            </button>
          </div>
        </div>}
      </div>
    );
  }    
};

export default NameListItem;