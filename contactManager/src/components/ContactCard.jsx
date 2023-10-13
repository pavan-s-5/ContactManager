import React from "react";
import user from '../assets/userImage.png'
import { Link } from "react-router-dom";

const ContactCard = ({contact, clickHandler}) => {
  return (
    <div className="item" style={{ display: "flex", alignItems : 'center', gap : '5px'}} key={contact.id}>

      <img src={user} alt="" className="ui avatar image" />

      <div className="content" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }} >
        <Link to={`/contactdetail/${contact.id}`} state={{contact}}>
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </Link>
      </div>

      <Link to={`/edit`} state={{contact}}> 
      <i className="edit alternate outline icon" style={{color : 'blue', fontSize : '20px', paddingRight : '20px', cursor : 'pointer'}}></i>
      </Link>

      <i className="trash alternate outline icon" style={{color : 'red', fontSize : '20px', cursor : 'pointer'}}
      onClick={() => clickHandler(contact.id)}></i>

      

    </div>
  );
};



export default ContactCard;


