import React from 'react';
import NameListItem from './NameListItem';

const NameList = (props) => {

  const nameItems = props.persons.map((person) => {
    return <NameListItem key={person.id} person={person} deletingPerson={props.deletingPerson} />
  });
  const onNameColumnClick = props.onNameColumnClick;
  
  return (
    <div className="name-list group">
      <div className="row ">
        <div className="name-column-header name-column" onClick={() => onNameColumnClick()}>Name 🡫</div>
        <div className="mail-column">E-mail address</div>
        <div className="phone-column">Phone number</div>
      </div>
      {nameItems}
    </div>
  );
};

export default NameList;