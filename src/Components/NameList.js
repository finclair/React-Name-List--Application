import React from 'react';
import NameListItem from './NameListItem';

const NameList = (props) => {
  console.log(props.persons);
  const nameItems = props.persons.map((person) => {
    return <NameListItem 
            key={person.id} 
            person={person}
            deletingPerson={props.deletingPerson}
            editingPerson={props.editingPerson} 
            editingId={props.editingId}
            onEditFormSubmit={props.onEditFormSubmit} 
            onDiscardButtonClick={props.onDiscardButtonClick}
            />
  });
  const onDataColumnClick = props.onDataColumnClick;
  const arrowMark = props.sortAlphabetically ? "🡩" : "🡫";

  return (
    <div className="name-list group">
      <div className="row">
        <div className="name-column-header name-column" onClick={() => onDataColumnClick("name")}>Name {arrowMark}</div>
        <div className="mail-column">E-mail address</div>
        <div className="phone-column-header phone-column" onClick={() => onDataColumnClick("phone")}>Phone number {arrowMark}</div>
      </div>
      {nameItems}
    </div>
  );
};

export default NameList;