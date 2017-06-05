import React from 'react';

const NameListItem = (props) => {
  
  const person = props.person;
  const deletingPerson = props.deletingPerson;
  const showEditForm = props.showEditForm;
  return (
    <div className="row person">
      <div className="name-column">{person.name}</div>
      <div className="mail-column">{person.e_mail}</div>
      <div className="phone-column">{person.phone}</div>
      <div className="buttons-column">
        <button onClick={() => showEditForm(person.id)} className="button-modify"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
        <button onClick={() => deletingPerson(person.id)} className="button-delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
      </div>
    </div>
  );
      
};

export default NameListItem;