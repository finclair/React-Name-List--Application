import React, { Component } from 'react';


class InputFields extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', e_mail: '', phone: '', id: 6};
    
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
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
  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.name === "" || this.state.e_mail === "" || this.state.phone === "") { return; }
    this.setState({ id: this.state.id + 1 });
    this.props.onFormSubmit(this.state);
    this.setState({name: '', e_mail: '', phone: '',});
  }

  render() {
    return (
      <div>
        <form className="add-new" onSubmit={this.onFormSubmit}>
          <div className="row">
            <input
              className="input-field col-sm-2" placeholder="Full Name"
              value={this.state.name}
              onChange={this.onNameInputChange} 
             />
            <input className="input-field col-sm-3" placeholder="E-mail Address" 
              value={this.state.e_mail}
              onChange={this.onEmailInputChange} 
            />
            <input className="input-field col-sm-2" placeholder="Phone Number" 
              value={this.state.phone}
              onChange={this.onPhoneInputChange} 
            />
            <button className="button-add col-sm-2 pull-right">Add new</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputFields;