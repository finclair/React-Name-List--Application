import React, {Component} from 'react';

class NameListItem extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.person.id,
      name: this.props.person.name,
      e_mail: this.props.person.e_mail,
      phone: this.props.person.phone,
      deletingPerson: props.deletingPerson,
    }
    this.showEditForm = this.showEditForm.bind(this);

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);
  }

  componentWillReceiveProps(newprops) {
    this.setState({
      id: newprops.person.id,
      name: newprops.person.name,
      e_mail: newprops.person.e_mail,
      phone: newprops.person.phone,
      editingId: newprops.editingId,
    })
  }

  showEditForm(event) {
    event.preventDefault();
    this.props.showEditForm(this.state.id);
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
      {this.state.id === this.state.editingId ? <div>
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
                <button className="button-edit col-sm-2 pull-right">Edit</button>
              </div>
            </form>
          </div> : <div className="row person">
          <div className="name-column">{this.state.name}</div>
          <div className="mail-column">{this.state.e_mail}</div>
          <div className="phone-column">{this.state.phone}</div>
          <div className="buttons-column">
            <button onClick={this.showEditForm} className="button-modify"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
            <button onClick={() => this.state.deletingPerson(this.state.id)} className="button-delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
          </div>
        </div>}
      </div>
    );
  }    
};

export default NameListItem;