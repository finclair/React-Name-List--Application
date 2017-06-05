import React, {Component} from 'react';

class EditingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.nameEdit,
      email: props.emailEdit,
      phone: props.phoneEdit
    }
  }

  render() {
    return(
      <div>
        <form className="form-edit">
          <div className="row">
              <input
                className="input-field col-sm-2" 
                value={this.state.name}
              />
              <input className="input-field col-sm-3" 
                value={this.state.email}
              />
              <input className="input-field col-sm-2"  
                value={this.state.phone}
              />
              <button className="button-edit col-sm-2 pull-right">Edit</button>
            </div>
          </form>
      </div>
    ); 
  }
}

export default EditingForm;