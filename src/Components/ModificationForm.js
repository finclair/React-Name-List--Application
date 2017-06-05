import React from 'react';

const ModificationForm = (props) => {
  
  return(
    <div>
      <form className="form-modify">
        <div className="row">
            <input className="input-field col-sm-2" placeholder="Full Name"/>
            <input className="input-field col-sm-3" placeholder="E-mail Address" />
            <input className="input-field col-sm-2" placeholder="Phone Number" />
          </div>
        </form>
    </div>
  ); 
};

export default ModificationForm;