import React, { Component } from 'react';
import NameItem from './NameItem';

const NameList = (props) => {
  console.log(props.names[0]);

  //Tänne tulee määritellä table sekä kunkin NameItemin palautus
  return (
    <div className="name-list group">
      <div className="row ">
        <div className="name-column">Name</div>
        <div className="mail-column">E-mail address</div>
        <div className="phone-column">Phone number</div>
        
      </div>
      <div className="row person">
        <div className="name-column">John Doe</div>
        <div className="mail-column">john.doe@gmail.com</div>
        <div className="phone-column">0405678471</div>
        <div className="buttons-column">
          <button className="button-modify">M</button>
          <button className="button-delete">D</button>
        </div>
      </div>
      <div className="row person">
        <div className="name-column">George Clooney</div>
        <div className="mail-column">george.clooney@hollywood.com</div>
        <div className="phone-column">0504629898</div>
        <div className="buttons-column">
          <button className="button-modify">M</button>
          <button className="button-delete">D</button>
        </div>
      </div>
      <div className="row person">
        <div className="name-column">George Clooney</div>
        <div className="mail-column">george.clooney@hollywood.com</div>
        <div className="phone-column">0504629898</div>
        <div className="buttons-column">
          <button className="button-modify">M</button>
          <button className="button-delete">D</button>
        </div>
      </div>
      <div className="row person">
        <div className="name-column">George Clooney</div>
        <div className="mail-column">george.clooney@hollywood.com</div>
        <div className="phone-column">0504629898</div>
        <div className="buttons-column">
          <button className="button-modify">M</button>
          <button className="button-delete">D</button>
        </div>
      </div>
    </div>
   
    
  );

};

export default NameList;