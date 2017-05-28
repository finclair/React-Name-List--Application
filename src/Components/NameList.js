import React from 'react';
import NameListItem from './NameListItem';

const NameList = (props) => {
  
  const nameItems = props.names.map((name) => {
    return <NameListItem key={name.id} name={name} deletingName={props.deletingName} />
  });

  return (
    <div className="name-list group">
      <div className="row ">
        <div className="name-column">Name</div>
        <div className="mail-column">E-mail address</div>
        <div className="phone-column">Phone number</div>
      </div>
      {nameItems}
    </div>

  );

};

export default NameList;