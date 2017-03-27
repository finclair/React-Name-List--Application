import React, { Component } from 'react';


class InputFields extends Component {

  render() {
    return (
      <div>
        <form className="add-new">
          <div className="row">
            <input className="input-field col-sm-2" placeholder="Full Name" />
            <input className="input-field col-sm-3" placeholder="E-mail Address" />
            <input className="input-field col-sm-2" placeholder="Phone Number" />
            <button className="button-add col-sm-2 pull-right">Add new</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputFields;