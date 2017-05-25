import React, { Component } from 'react';


class InputFields extends Component {

  constructor(props) {
    super(props);
    this.state = {nameInput: '', emailInput: '', phoneInput: ''};

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    
    

  }

  onNameInputChange(event) {
    
    this.setState({ nameInput: event.target.value });
    
  }
  onEmailInputChange(event) {
    this.setState({ emailInput: event.target.value });
    
  }

  onPhoneInputChange(event) {
    this.setState({ phoneInput: event.target.value });
    
  }

  onFormSubmit(event) {
    
  }

  render() {
    return (
      <div>
        <form className="add-new" onSubmit={this.onFormSubmit}>
          <div className="row">
            <input
              className="input-field col-sm-2" placeholder="Full Name"
              value={this.state.nameInput}
              onChange={this.onNameInputChange} 
             />
            <input className="input-field col-sm-3" placeholder="E-mail Address" 
              value={this.state.emailInput}
              onChange={this.onEmailInputChange} 
            />
            <input className="input-field col-sm-2" placeholder="Phone Number" 
              value={this.state.phoneInput}
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