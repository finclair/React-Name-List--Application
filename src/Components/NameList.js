import React from 'react';
import NameListItem from './NameListItem';

const NameList = (props) => {
  
  const nameItems = props.names.map((name) => {
    return <NameListItem key={name.id} name={name} deletingName={props.deletingName} />
  });
  const sortingNames = props.sortingNames;
  return (
    <div className="name-list group">
      <div className="row ">
        <div className="name-column">Name<button onClick={() => sortingNames()} className="button-sort">🡫</button></div>
        <div className="mail-column">E-mail address</div>
        <div className="phone-column">Phone number</div>
      </div>
      {nameItems}
    </div>

  );

};

export default NameList;