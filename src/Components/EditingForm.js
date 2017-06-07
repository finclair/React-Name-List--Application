import React, {Component} from 'react';

class EditingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.idEdit,
      name: props.nameEdit,
      email: props.emailEdit,
      phone: props.phoneEdit
    } 
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);
  }

  onNameInputChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailInputChange(event) {
    this.setState({ email: event.target.value });
  }
  onPhoneInputChange(event) {
    this.setState({ phone: event.target.value });
  }

  render() {
    return(
      <div>
        <form className="form-edit">
          <div className="row">
              <input
                className="input-field col-sm-2" 
                value={this.state.name}
                onChange={this.onNameInputChange} 
              />
              <input className="input-field col-sm-3" 
                value={this.state.email}
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