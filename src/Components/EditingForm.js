import React from 'react';

const ModificationForm = (props) => {
  console.log(props);
  return(
    <div>
      <form className="form-edit">
        <div className="row">
            <input
              className="input-field col-sm-2" 
              value={props.nameEdit}
             />
            <input className="input-field col-sm-3" 
              value={props.emailEdit}
            />
            <input className="input-field col-sm-2"  
              value={props.phoneEdit}
            />
            <button className="button-edit col-sm-2 pull-right">Edit</button>
          </div>
        </form>
    </div>
  ); 
};

export default ModificationForm;