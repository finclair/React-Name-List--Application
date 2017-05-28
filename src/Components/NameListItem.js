import React from 'react';

const NameListItem = (props) => {
  console.log(props.name);
  
  const name = props.name;
  const deletingName = props.deletingName;
  return (
    <div className="row person">
      <div className="name-column">{name.name}</div>
      <div className="mail-column">{name.e_mail}</div>
      <div className="phone-column">{name.phone}</div>
      <div className="buttons-column">
        <button className="button-modify">M</button>
        <button onClick={() => deletingName(name.id)} className="button-delete">D</button>
      </div>
    </div>
  );
      
};

export default NameListItem;