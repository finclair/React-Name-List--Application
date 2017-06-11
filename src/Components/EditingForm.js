import React, {Component} from 'react';

class EditingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.idEdit,
      name: props.nameEdit,
      e_mail: props.emailEdit,
      phone: props.phoneEdit
    } 
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);
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
    return(
      <div>
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
      </div>
    ); 
  }
}

export default EditingForm;